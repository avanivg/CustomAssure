
import React from "react";
import './index.css';
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
     <Nav>
        <NavMenu>
          <NavLink to ="/home" activeStyle>
            Customer Portal
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