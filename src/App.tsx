import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Blob from "./components/Blob"

function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<Blob color="orange" />
			<Blob color="blue" />
			<div className="img-wrapper">
				<img src="./logo-screenshot.png" alt="logo" />
			</div>
			<h1>Coming Soon</h1>
			<h1>قريباً</h1>
		</div>
	)
}

export default App
