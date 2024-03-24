// filename -App.js

import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages/blogs";
import About from "./pages/about";
import JobBoard from "./pages/jobBoard";
import People from "./pages/people";
import Register from "./pages/signup";

function App() {
	
	return (
		<Router>
			<Navbar />
			<Routes>

				<Route path="/logo-container" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/people" element={<People />} />
				<Route path="/jobBoard" element={<JobBoard />} />
				<Route path="/sign-up" element={<Register />} />
			</Routes>
		</Router>
	);
}


  


export default App;

