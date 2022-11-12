
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to ="/home" activeStyle>
            My conversations
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/statistics" activeStyle>
            Statistics
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;