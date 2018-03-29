import React from 'react';
import '../../App.css';
import dance_logo from '../../img/dance_logo.svg';


const navbar = () => {
  return(
    <nav className="navbar">
      <div className="logo">
        <img src={dance_logo} alt="company logo" />
      </div>
        <div className="nav-links">
          <ul>
            <li><a href="">home</a></li>
            <li><a href="">classes</a></li>
            <li><a href="">price</a></li>
            <li><a href="">contact</a></li>
          </ul>
        </div>
        <button className="login" type="button" name="login">
          Login
        </button>
    </nav>

  );
}


export default navbar;
