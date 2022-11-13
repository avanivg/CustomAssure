
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
          <div class = "brand justify-content-end">
        <i class="fa-solid fa-user-group"></i>
          <h2> CustomAssure</h2>
          </div>
          
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;