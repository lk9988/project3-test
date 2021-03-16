import React from "react";
import UseCanvas from "./pages/useCanvas";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Canvas from "./components/Canvas"
function App() {
	return (
		<>
			{/* <UseCanvas></UseCanvas> */}
			{/* <BrowserRouter> */}
			<UseCanvas>
			{/* <Canvas> */}
			<Main></Main>
      {/* </Canvas> */}
			<h1>sdflsdjfsldkfjsdlfjsdlfk</h1>
			</UseCanvas>
			{/* </BrowserRouter> */}
		</>
	);
}

export default App;
