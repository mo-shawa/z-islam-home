type BlobProps = {
	color: "orange" | "blue"
}

export default function Blob({ color }: BlobProps) {
	return (
		<div
			className="blob-wrapper"
			style={
				color === "orange" ? { right: 0, bottom: 0 } : { left: 0, bottom: 0 }
			}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className={`blob-${color}`}
				viewBox="0 0 197.8 163.2"
			>
				<path d="M13.6 98.8C2.2 76.4-5.3 49 4.7 31.4c10-17.5 37.6-25.2 65.7-29.1 28.1-3.9 56.9-4.2 82.1 10.9 25.2 15 46.8 45.4 45.3 74.8-1.5 29.5-26.2 58.1-53.7 69.3-27.5 11.2-57.9 5-80.7-6.8-23-11.8-38.4-29.3-49.8-51.7z"></path>
			</svg>
		</div>
	)
}
