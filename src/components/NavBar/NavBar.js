import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {
   render() {
      return (
         <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
               <a href="#">RH</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
               <NavItem eventKey={1} to="/">Home</NavItem>
               <NavItem eventKey={2} to="/aboutMe">About Me</NavItem>
               <NavItem eventKey={3} href="/projects">Projects</NavItem>
            </Nav>
          </Navbar.Collapse>
         </Navbar>
      );
   }
}

export default NavBar;
