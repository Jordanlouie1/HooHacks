// components/Navbar/index.js

import React from "react";

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
					<NavLink to="/sign-up" activeStyle>
						Sign Up
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
