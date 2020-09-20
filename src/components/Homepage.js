import React from 'react';
import Routes from '../components/Routes.js';
import Navbar from '../components/Navbar.js';
import '../App.css';
import { Link } from 'react-router-dom';
import { firebaseConnect, isLoaded } from 'react-redux-firebase';
import { connect } from 'react-redux';
import { compose } from 'redux';
import '../Homepage.css';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  
  render(){
    return (
      <div className="App">
      <header className="App-header">
        <h1><strong>{'\u2203'}</strong>NGAUGE</h1>
        <Navbar />
      </header>
      {/* <div className="headblock headblock3" />
      <div className="headblock headblock2" />
      <div className="headblock headblock1" /> */}
      <Routes />
      <h3 class="text">Account</h3>
      {this.props.isLoggedIn ? (
        <div class= "text">
          <div>{this.props.email}</div>
          <button onClick={() => this.props.firebase.logout()}>Logout</button>
          <br/>
        </div>
      ) : (
        <div class="text">
        <div>Not logged in</div>
          <Link to="/register">Register</Link>
          <br />
          <Link to="/login">Login</Link>
        </div>
      )
      }
      
    </div>
  );
}
}



const mapStateToProps = state => {
  return {
    email: state.firebase.auth.email,
    isLoggedIn: state.firebase.auth.uid,
  };
};

export default compose(firebaseConnect(), connect(mapStateToProps))(Homepage);