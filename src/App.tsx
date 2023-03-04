import { useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import Blob from "./components/Blob"

function App() {
	return (
		<div className="App">
			<div className="img-wrapper">
				<img src="./logo.svg " alt="logo" />
			</div>
			<div className="pattern top"></div>
			<div className="pattern"></div>
			<div className="h1-wrapper">
				<h1>قريباً</h1>
				<h1>Coming Soon</h1>
			</div>
		</div>
	)
}

export default App
