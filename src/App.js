import "./App.css";
import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
	addEdge,
	Controls,
	ControlButton,
	Background,
	useNodesState,
	useEdgesState,
} from "react-flow-renderer";
import CourseNode from "./CourseNode.js";
import YearNode from "./YearNode.js";
import { nodes as initialNodes, edges as initialEdges, year_labels as years } from "./courses";
import { toPng } from "html-to-image";

const nodeTypes = { course: CourseNode, year: YearNode };

const onInit = (reactFlowInstance, setReactFlowInstance) => {
	setReactFlowInstance(reactFlowInstance);
	document.querySelector(".reactFlowBackgroundPattern").onClick = () => {
		console.log("background clicked");
	};
};

const checkedNodes = JSON.parse(window.localStorage.getItem("checkedNodes"));

if (checkedNodes) {
	initialNodes.forEach((node) => {
		if (checkedNodes.includes(node.id)) {
			node.data.done = true;
		}
	});
}

var lefts = [];
var rights = [];
var full_edges = [];
initialEdges.forEach((e) => {
	full_edges.push([e.source, e.target]);
	lefts.push(e.target);
	rights.push(e.source);
});

var ids = [];
initialNodes.forEach((n) => {
	ids.push(n.id);
	if (lefts.includes(n.id)) {
		n.data.hasLeft = true;
	}
	if (rights.includes(n.id)) {
		n.data.hasRight = true;
	}
});

initialNodes.forEach((n) => {
	if (!n.data.done) {
		n.data.enabled = false;
		if (backward_path(n.id, full_edges).length === 0) {
			n.data.enabled = true;
		}
		if (n.data.hasLeft) {
			if (backward_path(n.id, full_edges).every((id) => course_by_id(id).data.done)) {
				n.data.enabled = true;
			}
		}
	} else {
		n.data.enabled = true;
	}
});

var corrAmm = {};
var corrAmmLis = [];
ids.forEach((id) => {
	var thisPath = path(id).full;
	corrAmm[id] = thisPath.length - 1;
	corrAmmLis.push([id, thisPath.length - 1]);
});
corrAmmLis = corrAmmLis.sort(function (a, b) {
	return b[1] - a[1];
});

function onlyUnique(value, index, self) {
	return self.indexOf(value) === index;
}

// Graph nodes after node n
function forward_path(n, edges) {
	var nodes = [];
	edges.forEach(function (edge) {
		if (edge[0] === n) {
			nodes.push(edge[1]);
			forward_path(edge[1], edges).forEach(function (node) {
				nodes.push(node);
			});
		}
	});
	return nodes.filter(onlyUnique);
}

// Graph nodes before node n
function backward_path(n, edges) {
	var nodes = [];
	edges.forEach(function (edge) {
		if (edge[1] === n) {
			nodes.push(edge[0]);
			backward_path(edge[0], edges).forEach(function (node) {
				nodes.push(node);
			});
		}
	});
	return nodes.filter(onlyUnique);
}

// Graph nodes before and after node n
function path(n) {
	const forward = forward_path(n, full_edges);
	const backward = backward_path(n, full_edges);
	return {
		forward: forward,
		backward: backward,
		full: forward.concat(backward).concat([n]),
	};
}

// Filter nodes by ID
function filterNodesByID(id) {
	var nodes = [];
	initialNodes.forEach(function (node) {
		if (path(id).full.includes(node.id)) {
			nodes.push(node);
		}
	});
	return nodes;
}

// Filter nodes by year
function filterNodesByYear(year) {
	var nodes = [];
	initialNodes.forEach(function (node) {
		if (node.data.year === year) {
			nodes.push(node);
		}
	});
	return nodes;
}

function course_by_id(id) {
	var course = null;
	initialNodes.forEach(function (node) {
		if (node.id === id) {
			course = node;
		}
	});
	return course;
}

function downloadImage(dataUrl) {
	const a = document.createElement("a");
	a.setAttribute("download", "Correlativas_LCD.png");
	a.setAttribute("href", dataUrl);
	a.click();
}

const screenshot = () => {
	toPng(document.querySelector(".react-flow"), {
		filter: (node) => {
			if (
				node?.classList?.contains("react-flow__minimap") ||
				node?.classList?.contains("react-flow__controls")
			) {
				return false;
			}

			return true;
		},
	}).then(downloadImage);
};

const getNodeYear = (year) => {
	return years.filter((y) => y.id === year)[0];
};

function App() {
	const [nodes, setNodes, onNodesChange] = useNodesState(years.concat(initialNodes));
	const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
	const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
	const [pathview, setPathview] = useState(true);
	const [label, setLabel] = useState("Clickea en una materia para ver todas sus correlativas");
	const [preLabel, setPreLabel] = useState("");
	const [clickedCourse, setClickedCourse] = useState("");

	const [reactFlowInstance, setReactFlowInstance] = useState(null);
	//const [fitView, setFitView] = useState((e) => {console.log(e)});

	const updateNodes = (id, reducedView) => {
		setPathview(reducedView);
		if (reducedView) {
			setNodes(filterNodesByID(id));
			//setNodes(years.concat(filterNodesByID(id)));
		} else {
			setNodes(years.concat(initialNodes));
		}
		setEdges(initialEdges);
	};

	const nodeClick = (event, element) => {
		if (element.type === "course") {
			if (event.target.nodeName === "INPUT") return;
			if (clickedCourse !== element.id) {
				setClickedCourse(element.id);
				updateNodes(element.id, true);
				setClickedCourse(element.id);
				if (!pathview) {
					setLabel("Clickea en una materia para ver todas sus correlativas");
				} else {
					setLabel("Clickea en cualquier materia para resetear vista");
				}
			} else {
				reset();
				setClickedCourse(null);
			}
		} else if (element.type === "year") {
			setNodes(filterNodesByYear(element.id).concat(getNodeYear(element.id)));
			setEdges(initialEdges);
			setLabel("Clickea en cualquier materia para resetear vista");
		}
	};

	const mapClick = (e) => {
		if (e.target.className === "react-flow__pane react-flow__container") {
			reset();
		}
	};

	const nodeMouseEnter = (event, element) => {
		setPreLabel(label);
		if (element.id !== clickedCourse) {
			if (corrAmm[element.id] > 1) {
				setLabel(
					"Clickea en " +
						course_by_id(element.id).data.label.props.children +
						" para ver sus " +
						corrAmm[element.id] +
						" correlativas"
				);
			} else if (corrAmm[element.id] === 1) {
				setLabel(
					"Clickea en " +
						course_by_id(element.id).data.label.props.children +
						" para ver su correlativa"
				);
			} else {
				setLabel(course_by_id(element.id).data.label.props.children + " no tiene correlativas");
			}
		} else {
			if (corrAmm[element.id] > 1) {
				setLabel(
					course_by_id(element.id).data.label.props.children +
						" tiene " +
						corrAmm[element.id] +
						" correlativas"
				);
			} else if (corrAmm[element.id] === 1) {
				setLabel(course_by_id(element.id).data.label.props.children + " tiene 1 correlativa");
			} else if (corrAmm[element.id] === 0) {
				setLabel(course_by_id(element.id).data.label.props.children + " no tiene correlativas");
			} else {
				setLabel("Clickea en una materia para ver todas sus correlativas");
			}
		}
	};

	const nodeMouseLeave = (event, element) => {
		setLabel("Clickea en una materia para ver todas sus correlativas");
	};

	const reset = () => {
		updateNodes(null, false);
		setLabel("Clickea en una materia para ver todas sus correlativas");
	};

	useEffect(() => {
		if (reactFlowInstance) {
			reactFlowInstance.fitView({ duration: 800, padding: 0.1, center: true });
		}

		const nodesChecked = nodes.filter((node) => node.type === "course" && node.data.done);
		const nodesCheckedIDs = nodesChecked.map((node) => node.id);
		window.localStorage.setItem("checkedNodes", JSON.stringify(nodesCheckedIDs));
	}, [nodes, reactFlowInstance]);

	const handleNodeCheck = (event, id) => {
		var course = course_by_id(id);
		course.data.done = event.target.checked;
		var thisPath = path(id).full;
		thisPath.forEach((id) => {
			var course = course_by_id(id);
			if (!course.data.done) {
				course.data.enabled = false;
				if (backward_path(id, full_edges).length === 0) {
					course.data.enabled = true;
				}
				if (course.data.hasLeft) {
					if (backward_path(id, full_edges).every((id) => course_by_id(id).data.done)) {
						course.data.enabled = true;
					}
				}
			}
		});
		setNodes(years.concat(initialNodes));
	};

	return (
		<div className="App">
			<div
				style={{
					position: "absolute",
					top: "60px",
					width: "100vw",
					zIndex: 11,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "#aaa",
					fontFamily: '"Inter", sans-serif',
				}}
			>
				<div
					style={{
						backgroundColor: "#1E1E1E",
						padding: "2px",
						borderRadius: "5px",
						width: "auto",
						height: "auto",
						zIndex: 20,
						fontFamily: '"Inter", sans-serif',
					}}
				>
					{label}
				</div>
			</div>

			<ReactFlow
				nodes={[
					...nodes.map((node) => {
						if (node.type === "course") {
							return {
								...node,
								data: {
									...node.data,
									onCheck: handleNodeCheck,
								},
							};
						}
						return node;
					}),
				]}
				edges={edges}
				onNodesChange={onNodesChange}
				onEdgesChange={onEdgesChange}
				nodesDraggable={true}
				nodesConnectable={false}
				onConnect={onConnect}
				onInit={(instance) => onInit(instance, setReactFlowInstance)}
				fitView={true}
				attributionPosition="top-right"
				nodeTypes={nodeTypes}
				onClick={mapClick}
				onNodeClick={nodeClick}
				onNodeMouseEnter={nodeMouseEnter}
				onNodeMouseLeave={nodeMouseLeave}
			>
				<Controls
					style={{
						color: "#4A4A4A",
						backgroundColor: "#181818",
						borderRadius: "2px",
						padding: "5px",
						zIndex: 100,
					}}
					//onFitView={() => updateNodes(setNodes, setEdges, null, false, setPathview)}
					showInteractive={false}
				>
					<ControlButton
						onClick={reset}
						onMouseEnter={() => {
							setPreLabel(label);
							setLabel("Resetear vista");
						}}
						onMouseLeave={() => {
							setLabel(preLabel);
						}}
					>
						<>⌘</>
					</ControlButton>
					<ControlButton
						onClick={screenshot}
						style={{
							transform: "rotate(180deg)",
						}}
						onMouseEnter={() => {
							setPreLabel(label);
							setLabel("Descargar imagen");
						}}
						onMouseLeave={() => {
							setLabel(preLabel);
						}}
					>
						<>⏏︎</>
					</ControlButton>
				</Controls>
				<Background color="#aaa" gap={16} className="reactFlowBackgroundPattern" />
			</ReactFlow>
		</div>
	);
}

export default App;
