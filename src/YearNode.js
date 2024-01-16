function YearNode({ data }) {
	return (
		<>
			<div
				style={{
					width: "160px",
					minHeight: "40px",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					padding: 10,
					color: "#fff",
					borderRadius: 14,
					border: "0px solid #000",
					fontFamily: '"Inter", sans-serif',
					fontSize: "20px",
				}}
			>
				{data.label}
			</div>
		</>
	);
}

export default YearNode;
