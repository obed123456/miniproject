import React, { Component } from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import dance_logo from './img/dance_logo.svg';

class Main extends Component {
  render() {
    return (
      <HashRouter>
      <div>
      <nav className="navbar">
          <div className="logo">
            <img src={dance_logo} alt="company logo" />
          </div>

        <div className="nav-links">
          <ul>
             <li><NavLink exact to="/">Home</NavLink></li>
             <li><NavLink to="/stuff">Stuff</NavLink></li>
             <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <button className="login" type="button" name="login">
            Login
          </button>
        </div>
      </nav>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
