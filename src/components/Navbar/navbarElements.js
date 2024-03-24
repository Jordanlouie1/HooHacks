// components/Navbar/navbarElements.js

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
	background: #2E3047;
	height: 77px;
	display: flex;
	justify-content: space-between;
	z-index: 12;
	cursor: pointer;
	
	/* Third Nav */
	/* justify-content: flex-start; */
	

	
`;

export const NavLink = styled(Link)`
	color: white;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	height: 100

	&.active {
		color: #5783db;
	}
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #white;
		color: #5783db;
		margin: 15px;
		opacity: 100%;
		
	}
	
`;

export const Bars = styled(FaBars)`
	display: none;
	color: #808080;
	@media screen and (max-width: 768px) {
		display: block;
		position: absolute;
		top: 0;
		right: ;
		transform: translate(-100%, 75%);
		font-size: 1.8rem;
		cursor: pointer;
		
	}
`;

export const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -24px;
	/* Second Nav */
	/* margin-right: 24px; */
	/* Third Nav */
	/* width: 100vw;
white-space: nowrap; */
	@media screen and (max-width: 768px) {
		display: none;
	}
	
`;

export const NavBtn = styled.nav`
	display: flex;
	align-items: center;
	margin-right: 24px;
	/* Third Nav */
	/* justify-content: flex-end;
width: 100vw; */
	@media screen and (max-width: 768px) {
		display: none;
	}
	
`;

export const NavBtnLink = styled(Link)`
	border-radius: 4px;
	background: white;
	padding: 10px 22px;
	color: #000000;
	outline: none;
	border: none;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	/* Second Nav */
	margin-left: 24px;
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #fff;
		color: #5783db;
	}
`;

