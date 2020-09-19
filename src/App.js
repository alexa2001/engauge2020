import React from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Homepage from './components/Homepage';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const App = props => {
  return (
    <Switch>
      <Route exact path ="/">
        <Homepage/>
      </Route> 
      <Route exact path="/register">
        <Register/>
      </Route>
    </Switch>
  )
}


export default App;