import React from 'react';
import Routes from '../components/Routes.js';
import Navbar from '../components/Navbar.js';
import '../App.css';

class Homepage extends React.Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
              <h1><strong>{'\u2203'}</strong>NGAUGE</h1>
              <Navbar />
            </header>
            <div className="headblock headblock3" />
            <div className="headblock headblock2" />
            <div className="headblock headblock1" />
            <Routes />
          </div>
        );
    }

}

export default Homepage;