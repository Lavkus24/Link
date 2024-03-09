import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";


import "./App.css";
import ProfilePage from "./Component/ProfilePage";
import Authentication from "./Component/Authentication";

import { Provider } from "react-redux";
import useStore from "./Redux/useStore";
import axios from "axios";

const App = () => {
	const queryClient = new QueryClient();
	axios.defaults.baseURL = "http://localhost:3001/";

	return (
		<QueryClientProvider client={queryClient} contextSharing={true}>
			<Provider store={useStore}>
				<Router>
					<Routes>
						<Route path="/" element={<Authentication/>}/>
						<Route path="/profile" element={<ProfilePage/>}/>
					</Routes>
				</Router>
			</Provider>
		</QueryClientProvider>

	);
};

export default App;
