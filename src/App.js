// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import JobBoard from "./pages/jobBoard";
import People from "./pages/people";
import Register from "./pages/register";
import SignIn from "./pages/signin";

function App() {
	
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/people" element={<People />} />
				<Route path="/jobBoard" element={<JobBoard />} />
				<Route path="/register" element={<Register />} />
				<Route path="/signin" element={<SignIn />} />
			</Routes>
		</Router>
	);
}


  


export default App;

