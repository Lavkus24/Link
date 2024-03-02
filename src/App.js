import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Header from "../src/Component/Header";
import Card from "./Component/Profile";
import About from "../src/Component/About";
import Info from "../src/Component/Info";
import Education from "../src/Component/Education";
import Skill from "../src/Component/Skill";
import { Provider } from "react-redux";
import useStore from "./Redux/useStore";

function App() {
	return (
		<Provider store={useStore}>
			<Router>
				<Header/>
				<Card/>
				<Info/>
				<About/>
				<Education/>
				<Skill/>
			</Router>
		</Provider>
	);
}

export default App;
