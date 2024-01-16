import { MarkerType } from "react-flow-renderer";

const materias = {
	CBC: [
		{
			foreground: "#000",
			background: "#D9B600",
			label: "ICSE",
			cuatrimestre: 1,
			requires: [],
		},
		{
			year: "cbc",
			foreground: "#000",
			background: "#D9B600",
			label: "Análisis",
			cuatrimestre: 1,
			requires: [],
		},
		{
			foreground: "#000",
			background: "#D9B600",
			label: "Química",
			cuatrimestre: 1,
			requires: [],
		},
		{
			foreground: "#000",
			background: "#D9B600",
			label: "IPC",
			cuatrimestre: 2,
			requires: [],
		},
		{
			year: "cbc",
			foreground: "#000",
			background: "#D9B600",
			label: "Álgebra",
			cuatrimestre: 2,
			requires: [],
		},
		{
			foreground: "#000",
			background: "#D9B600",
			label: "Física",
			cuatrimestre: 2,
			requires: [],
		},
	],
	"1er Año": [
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Álgebra I",
			cuatrimestre: 1,
			requires: ["CBC"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Algoritmos y Estructuras de Datos I",
			cuatrimestre: 1,
			requires: ["CBC"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Electiva de Introducción a las Ciencias Naturales",
			cuatrimestre: 2,
			requires: ["CBC"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Análisis I",
			cuatrimestre: 2,
			requires: ["CBC"],
		},
	],
	"2do Año": [
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Laboratorio de Datos",
			cuatrimestre: 1,
			requires: ["Algoritmos y Estructuras de Datos I"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Análisis II",
			cuatrimestre: 1,
			requires: ["Análisis I"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Álgebra Lineal Computacional",
			cuatrimestre: 1,
			requires: ["Álgebra I", "Algoritmos y Estructuras de Datos I"],
		},
		{
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			label: "Algoritmos y Estructuras de Datos II",
			cuatrimestre: 2,
			requires: ["Álgebra I", "Algoritmos y Estructuras de Datos I"],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Análisis Avanzado",
			cuatrimestre: 2,
			requires: ["Análisis II", "Álgebra I"],
		},
	],
	"3er Año": [
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Probabilidad",
			cuatrimestre: 1,
			requires: ["Análisis Avanzado"],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Algoritmos y Estructuras de Datos III",
			cuatrimestre: 1,
			requires: ["Algoritmos y Estructuras de Datos II"],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Intr. a la Estadística y Ciencia de Datos",
			cuatrimestre: 2,
			requires: ["Laboratorio de Datos", "Probabilidad", "Álgebra Lineal Computacional"],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Intr. al Modelado Continuo",
			cuatrimestre: 2,
			requires: [
				"Análisis Avanzado",
				"Álgebra Lineal Computacional",
				"Algoritmos y Estructuras de Datos II",
			],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Intr. a la Investigación Operativa y Optimización",
			cuatrimestre: 2,
			requires: [
				"Algoritmos y Estructuras de Datos III",
				"Análisis II",
				"Álgebra Lineal Computacional",
			],
		},
	],
	"4to Año": [
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Materias Optativas",
			cuatrimestre: 1,
			requires: ["3er Año"],
		},
		{
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			label: "Tésis / Proyecto Final",
			cuatrimestre: 2,
			requires: ["3er Año"],
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

const findMateriaByLabel = (label) => {
	return parsedMaterias.find((materia) => materia.data.label === label);
};

const findMateriasByYear = (year) => {
	return parsedMaterias.filter((materia) => materia.data.year === year);
};

const parsedEdges = [];
parsedMaterias.forEach((materia) => {
	if (materia.data.requires) {
		materia.data.requires.forEach((require) => {
			const source = findMateriaByLabel(require);
			if (!source) {
				const sourceYear = findMateriasByYear(require);
				if (sourceYear.length > 0) {
					sourceYear.forEach((mat) => {
						parsedEdges.push({
							id: `${mat.id}-${materia.id}`,
							source: mat.id,
							target: materia.id,
							markerEnd: { type: MarkerType.ArrowClosed },
						});
					});
				}
			} else {
				parsedEdges.push({
					id: `${source.id}-${materia.id}`,
					source: source.id,
					target: materia.id,
					markerEnd: { type: MarkerType.ArrowClosed },
				});
			}
		});
	}
});

export { parsedMaterias as nodes, parsedYears as years, parsedEdges as connections };
