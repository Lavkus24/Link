import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import ProfilePage from "./Component/ProfilePage";
import Authentication from "./Component/Authentication";

import { Provider } from "react-redux";
import useStore from "./Redux/useStore";

const App = () => {
	return (
		<Provider store={useStore}>
			<Router>
				<Routes>
					<Route path="/" element={<Authentication/>}/>
					<Route path="/profile" element={<ProfilePage/>}/>
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
