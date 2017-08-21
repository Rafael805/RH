import React from 'react';
import ReactDOM from 'react-dom';

import Home from './containers/Home/Home';
import AboutMe from './containers/AboutMe/AboutMe'

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import './theme/globalStyles';

ReactDOM.render(
   <Router>
      <div>
         <Link to="/">Home </Link>
         <Link to="/about">About Me</Link>

         <Route exact path="/" component={Home}/>
         <Route path="/about" component={AboutMe}/>
      </div>
   </Router>,
   document.getElementById('root')
);
