import React from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './containers/Home/Home';
import App from './containers/App/App';
import AboutMe from './containers/AboutMe/AboutMe'

const routes = () => (
   <Router>
      <div>
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About Me</Link></li>
        </ul>

        <hr/>

        <Route exact path="/" component={Home}/>
        <Route path="/about" component={AboutMe}/>
      </div>
   </Router>
);

export default routes;
