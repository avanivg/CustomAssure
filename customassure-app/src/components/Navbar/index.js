
import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to ="/home" activeStyle>
            My Conversations
          </NavLink>
          <NavLink to="/statistics" activeStyle>
            Statistics
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;