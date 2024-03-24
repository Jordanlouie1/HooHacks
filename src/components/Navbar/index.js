// components/Navbar/index.js

import React from "react";
import logo from "../../assets/images/credibly.png";
import Home from "../../pages/blogs.js";


import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./navbarElements";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<Link className="logo-container"> <img src={logo} onClick={Home} width ="150" height ="50" alt="Logo"/></Link>
					
					<NavLink to="/jobBoard" activeStyle>
						Job Board
					</NavLink>
					<NavLink to="/people" activeStyle>
						People
					</NavLink>
					<NavLink to="/companies" activeStyle>
						Employers
					</NavLink>
					<NavLink to="/register" activeStyle>
						Register
					</NavLink>
					<NavLink to="/about" >
						About
					</NavLink>
				</NavMenu>
				<NavBtn>
					<NavBtnLink to="/signin">
						Sign In
					</NavBtnLink>
				</NavBtn>
			</Nav>
		</>
	);
};

export default Navbar;
