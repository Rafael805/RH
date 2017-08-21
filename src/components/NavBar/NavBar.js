import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
   render() {
      return (
         <Navbar inverse collapseOnSelect>
         <Navbar.Header>
            <Navbar.Brand>
               <a to="/">RH</a>
            </Navbar.Brand>
            <Navbar.Toggle />
         </Navbar.Header>
         <Navbar.Collapse>
            <Nav pullRight>
                  <NavItem eventKey={1}>Home</NavItem>
                  <NavItem eventKey={2}>About Me</NavItem>
            </Nav>
         </Navbar.Collapse>
         </Navbar>
      );
   }
}

export default NavBar;
