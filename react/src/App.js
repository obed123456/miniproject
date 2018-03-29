import React, { Component } from 'react';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import Footer from './Components/Footer/Footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <News />
        <Footer />
      </div>
    );
  }
}

export default App;
