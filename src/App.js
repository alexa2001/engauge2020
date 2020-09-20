import React from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Homepage from './components/Homepage';
import Login from './components/Login';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const App = props => {
  if (!isLoaded(props.auth, props.profile)) {
    return <div>Authentication loading...</div>;
  }
  return (
    <Switch>
      <Route exact path ="/">
        <Homepage/>
      </Route> 
      <Route exact path="/register">
        <Register/>
      </Route>
      <Route exact path="/login">
        <Login/>
      </Route>
    </Switch>
  )
}


const mapStateToProps = state => {
  return { auth: state.firebase.auth, profile: state.firebase.profile };
};

export default connect(mapStateToProps)(App);