import React, { Component } from "react";
import Tango from './img/tango.jpg';
import News from './NEWS';

class Home extends Component {
  render() {
    const bgImg = {
  backgroundImage: `url(${Tango})`
};
    return (
      <div>
      <header style={bgImg}>
        <div className="header-text">
            <div className="text-content">
              <div className="text-content52">
              <h1>Welcome to our Tango School</h1>
              <p>School where you learn to dance with guys</p>
            </div>
        </div>
      </div>
      </header>

      <News />
      </div>

    );
  }
}

export default Home;
