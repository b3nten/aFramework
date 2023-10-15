import { hydrate } from "preact"

export default function App() {
	console.log("Mounted!")
	return (
		<div>Hello <span className="text-red-500">World!</span></div>
	)
}

if (typeof Deno === "undefined") {
	hydrate(<App />, document.getElementById("app")!)
}