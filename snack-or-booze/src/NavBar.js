import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Snack or Booze
        </NavLink>

        <Nav className="ml-auto" navbar>
        <NavLink to="/add/item" className="ul">Add</NavLink>
          <NavItem >
            <NavLink to="/snacks" className="ul">Snacks</NavLink>
            <NavLink to="/drinks" >Drinks</NavLink>
            
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;
