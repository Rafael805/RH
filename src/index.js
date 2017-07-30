import React from 'react';
import ReactDOM from 'react-dom';
// import routes from './routes'

import Home from './containers/Home/Home';
import AboutMe from './containers/AboutMe/AboutMe'

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './theme/globalStyles';

const history = createBrowserHistory()

ReactDOM.render(
   <Router>
      <div>

      <Navbar inverse collapseOnSelect>
      <Navbar.Header>
         <Navbar.Brand>
            <a to="/">RH</a>
         </Navbar.Brand>
         <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
         <Nav pullRight>
            <NavLink exact to="/">
               <NavItem eventKey={1}>Home</NavItem>
            </NavLink>
            <NavLink to="/about">
               <NavItem eventKey={2}>About Me</NavItem>
            </NavLink>
         </Nav>
      </Navbar.Collapse>
      </Navbar>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={AboutMe} history={history}/>
      
      </div>
   </Router>,

   document.getElementById('root')
);
