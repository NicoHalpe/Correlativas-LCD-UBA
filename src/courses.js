import React from "react";
import { MarkerType } from "react-flow-renderer";

export const year_labels = [
	{
		id: "cbc",
		type: "year",
		data: {
			label: <>CBC</>,
		},
		position: { x: 150, y: 0 },
	},
	{
		id: "a1",
		type: "year",
		data: {
			label: <>1er Año</>,
		},
		position: { x: 750, y: 0 },
	},
	{
		id: "a2",
		type: "year",
		data: {
			label: <>2do Año</>,
		},
		position: { x: 1350, y: 0 },
	},
	{
		id: "a3",
		type: "year",
		data: {
			label: <>3er Año</>,
		},
		position: { x: 1950, y: 0 },
	},
];

export const nodes = [
	/* CBC */
	{
		id: "cbc-1",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cbc",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>ICSE</>,
		},
		position: { x: 0, y: 100 },
	},
	{
		id: "cbc-2",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cbc",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>IPC</>,
		},
		position: { x: 250, y: 100 },
	},
	{
		id: "cbc-3",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cbc",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>Análisis</>,
		},
		position: { x: 0, y: 200 },
	},
	{
		id: "cbc-4",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cbc",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>Álgebra</>,
		},
		position: { x: 250, y: 200 },
	},
	{
		id: "cbc-5",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cbc",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>Química</>,
		},
		position: { x: 0, y: 300 },
	},
	{
		id: "cbc-6",
		type: "course",
		targetPosition: "right",
		data: {
			year: "cbc",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "#D9B600",
			disabled_background: "#cda479",
			done: false,
			label: <>Física</>,
		},
		position: { x: 250, y: 300 },
	},
	/* Carrera */
	{
		id: "1",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Álgebra I</>,
		},
		position: { x: 600, y: 100 },
	},
	{
		id: "2",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Algoritmos y Estructuras de Datos I</>,
		},
		position: { x: 600, y: 200 },
	},
	{
		id: "3",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Electiva de Introducción a las Ciencias Naturales</>,
		},
		position: { x: 850, y: 100 },
	},
	{
		id: "4",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a1",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Análisis I</>,
		},
		position: { x: 850, y: 200 },
	},
	{
		id: "5",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Laboratorio de Datos</>,
		},
		position: { x: 1200, y: 100 },
	},
	{
		id: "6",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Análisis II</>,
		},
		position: { x: 1200, y: 200 },
	},
	{
		id: "7",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Álgebra Lineal Computacional</>,
		},
		position: { x: 1200, y: 300 },
	},
	{
		id: "8",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(241, 197, 152)",
			disabled_background: "rgba(241, 197, 152, 0.8)",
			done: false,
			label: <>Algoritmos y Estructuras de Datos II</>,
		},
		position: { x: 1450, y: 100 },
	},
	{
		id: "9",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a2",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Análisis Avanzado</>,
		},
		position: { x: 1450, y: 200 },
	},
	{
		id: "10",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Probabilidad</>,
		},
		position: { x: 1800, y: 100 },
	},
	{
		id: "11",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Algoritmos y Estructuras de Datos III</>,
		},
		position: { x: 1800, y: 200 },
	},
	{
		id: "12",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Intr. a la Estadística y Ciencia de Datos</>,
		},
		position: { x: 2050, y: 100 },
	},
	{
		id: "13",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Intr. al Modelado Continuo</>,
		},
		position: { x: 2050, y: 200 },
	},
	{
		id: "14",
		type: "course",
		targetPosition: "right",
		data: {
			year: "a3",
			hasRight: false,
			hasLeft: false,
			foreground: "#000",
			background: "rgb(199, 214, 236)",
			disabled_background: "rgba(199, 214, 236, 0.8)",
			done: false,
			label: <>Intr. a la Investigación Operativa y Optimización</>,
		},
		position: { x: 2050, y: 300 },
	},
];

export const edges = [
	/* Correlativas del CBC */

	...["cbc-1", "cbc-2", "cbc-3", "cbc-4", "cbc-5", "cbc-6"]
		.map((id) => {
			return ["1", "2", "3", "4"].map((mat) => {
				return {
					id: `${id}-${mat}`,
					source: id,
					target: mat,
					markerEnd: { type: MarkerType.ArrowClosed },
				};
			});
		})
		.flat(),

	/* Correlativas de álgebra */
	{ id: "1-9", source: "1", target: "9", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "1-7", source: "1", target: "7", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "1-8", source: "2", target: "8", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Algo I */
	{ id: "2-5", source: "2", target: "5", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "2-7", source: "2", target: "7", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "2-8", source: "2", target: "8", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Análisis I */
	{ id: "4-6", source: "4", target: "6", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Labo de datos */
	{ id: "5-12", source: "5", target: "12", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Análisis II */
	{ id: "6-9", source: "6", target: "9", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "6-14", source: "6", target: "14", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Alegebra Lineal Computacional */
	{ id: "7-12", source: "7", target: "12", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "7-13", source: "7", target: "13", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "7-14", source: "7", target: "14", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Algo II */
	{ id: "8-11", source: "8", target: "11", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "8-13", source: "8", target: "13", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Análisis avanzado */
	{ id: "9-10", source: "9", target: "10", markerEnd: { type: MarkerType.ArrowClosed } },
	{ id: "9-13", source: "9", target: "13", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de Probabilidad */
	{ id: "10-12", source: "10", target: "12", markerEnd: { type: MarkerType.ArrowClosed } },
	/* Correlativas de  */
	{ id: "11-14", source: "11", target: "14", markerEnd: { type: MarkerType.ArrowClosed } },
];
