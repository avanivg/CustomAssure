import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
background: #004266;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0 rem;
z-index: 12;
font-size: 24px;
font-family: Poppins;
`;

export const NavLink = styled(Link)`
color: #FFFFFF;
display: flex;
font-family: Poppins;
align-items: center;
text-decoration: none;
padding: 30px;
height: 100%;
cursor: pointer;
width: 33.33%
&.active {
	color: #4d4dff;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 20px;
	font-family: Poppins;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
font-family: Poppins;
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
