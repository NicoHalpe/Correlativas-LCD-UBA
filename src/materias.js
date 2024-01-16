import { MarkerType } from "react-flow-renderer";

const materias = {
	CBC: [
		{
			foreground: "#000",
			background: "#D9B600",
			label: "ICSE",
			cuatrimestre: 1,
			unlocks: ["y2-m1", "y2-m2", "y2-m3", "y2-m4"],
		},
		{
			year: "cbc",
			foreground: "#000",
			background: "#D9B600",
			label: "Análisis",
			cuatrimestre: 1,
			unlocks: ["y2-m1", "y2-m2", "y2-m3", "y2-m4"],
		},
		{
			foreground: "#000",
			background: "#D9B600",
			label: "Química",
			cuatrimestre: 1,
			unlocks: ["y2-m1", "y2-m2", "y2-m3", "y2-m4"],
		},
		{
			foreground: "#000",
			background: "#D9B600",
			label: "IPC",
			cuatrimestre: 2,
			unlocks: ["y2-m1", "y2-m2", "y2-m3", "y2-m4"],
		},
		{
			year: "cbc",
			foreground: "#000",
			background: "#D9B600",
			label: "Álgebra",
			cuatrimestre: 2,
			unlocks: ["y2-m1", "y2-m2", "y2-m3", "y2-m4"],
		},
		{
			foreground: "#000",
			background: "#D9B600",
			label: "Física",
			cuatrimestre: 2,
			unlocks: ["y2-m1", "y2-m2", "y2-m3", "y2-m4"],
		},
	],
	"1er Año": [
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Álgebra I",
			cuatrimestre: 1,
			unlocks: ["y3-m3", "y3-m4", "y3-m5"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Algoritmos y Estructuras de Datos I",
			cuatrimestre: 1,
			unlocks: ["y3-m1", "y3-m3", "y3-m4"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Electiva de Introducción a las Ciencias Naturales",
			cuatrimestre: 2,
			unlocks: [],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Análisis I",
			cuatrimestre: 2,
			unlocks: ["y3-m2"],
		},
	],
	"2do Año": [
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Laboratorio de Datos",
			cuatrimestre: 1,
			unlocks: ["y4-m3"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Análisis II",
			cuatrimestre: 1,
			unlocks: ["y3-m5", "y4-m5"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Álgebra Lineal Computacional",
			cuatrimestre: 1,
			unlocks: ["y4-m3", "y4-m4", "y4-m5"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Algoritmos y Estructuras de Datos II",
			cuatrimestre: 2,
			unlocks: ["y4-m2", "y4-m4"],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Análisis Avanzado",
			cuatrimestre: 2,
			unlocks: ["y4-m1", "y4-m4"],
		},
	],
	"3er Año": [
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Probabilidad",
			cuatrimestre: 1,
			unlocks: ["y4-m3"],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Algoritmos y Estructuras de Datos III",
			cuatrimestre: 1,
			unlocks: ["y4-m5"],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Intr. a la Estadística y Ciencia de Datos",
			cuatrimestre: 2,
			unlocks: [],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Intr. al Modelado Continuo",
			cuatrimestre: 2,
			unlocks: [],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Intr. a la Investigación Operativa y Optimización",
			cuatrimestre: 2,
			unlocks: [],
		},
	],
};

const parsedMaterias = [];
Object.keys(materias).forEach((year, i) => {
	materias[year].forEach((materia, j) => {
		const cuatrimestre = materia.cuatrimestre - 1;
		const materiasDelCuatrimestreAnterior = materias[year].filter(
			(m) => m.cuatrimestre === materia.cuatrimestre - 1
		).length;
		parsedMaterias.push({
			id: `y${i + 1}-m${j + 1}`,
			type: "course",
			data: {
				...materia,
				year,
			},
			position: {
				x: 0 + 600 * i + 250 * cuatrimestre,
				y: 100 + 100 * j - 100 * materiasDelCuatrimestreAnterior,
			},
		});
	});
});

const parsedYears = [];
Object.keys(materias).forEach((year, i) => {
	parsedYears.push({
		id: year,
		type: "year",
		data: {
			label: year,
		},
		position: { x: 150 + 600 * i, y: 0 },
	});
});

const parsedEdges = [];
parsedMaterias.forEach((materia) => {
	if (materia.data.unlocks) {
		materia.data.unlocks.forEach((unlock) => {
			parsedEdges.push({
				id: `${materia.id}-${unlock}`,
				source: materia.id,
				target: unlock,
				markerEnd: { type: MarkerType.ArrowClosed },
			});
		});
	}
});

export { parsedMaterias as nodes, parsedYears as years, parsedEdges as connections };
