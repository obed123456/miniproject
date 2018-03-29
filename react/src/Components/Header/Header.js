import React from 'react';
import Navbar from '../Navbar/Navbar';
import Tango from '../../img/tango.jpg';




const header = () => {
  const bgImg = {
    backgroundImage: `url(${Tango})`
  };
  return(
    <header style={bgImg}>
      <Navbar />
      <div className="header-text">
          <div className="text-content">
            <div className="text-content52">
            <h1>Welcome to our Tango School</h1>
            <p>School where you learn to dance with guys</p>
          </div>
      </div>
    </div>
    </header>

  );
}

export default header;
