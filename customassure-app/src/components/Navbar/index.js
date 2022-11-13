
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
            My Customers
          </NavLink>
          <NavLink to="/profile" activeStyle>
            Profile
          </NavLink>
          <NavLink to="/Nlp" activeStyle>
            Email Sentiment Analysis
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