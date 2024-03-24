// components/Navbar/index.js

import React from "react";
import logo from "../../assets/images/credibly.png";


import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./navbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<div className="logo-container"> <img src={logo} onClick={()=>alert("loading")} width ="150" height ="50" alt="Logo"/></div>

					<NavLink to="/about" >
						About
					</NavLink>
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
