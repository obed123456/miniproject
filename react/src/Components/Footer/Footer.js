import React from 'react';
import dance_logo from '../../img/dance_logo.svg';

const footer = () => {
  return(
    <footer>
      <div className="logo">
        <img src={dance_logo} alt="company logo" />
      </div>
    </footer>
  );
}

export default footer;
