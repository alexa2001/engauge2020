import React from 'react';
import Routes from './components/Routes';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Homepage from './components/Homepage';
import Login from './components/Login';
import FileUpload from './components/FileUpload';
import Reports from './components/Reports';

import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';

const App = props => {
  if (!isLoaded(props.auth, props.profile)) {
    return <div>Authentication loading...</div>;
  }
  return (
    <Switch>
      <Route path ="/">
        <Homepage/>
      </Route> 
      <Route exact path="/" render={
          () => 
          <>
              <h1>Welcome!</h1>
              <p style={{"font-size": "1.35em", "textAlign": "center"}}>
                  Upload a recording of your session through the upload tab.
                  <br /><br />
                  Then, wait for 15 seconds before heading over to the reports tab.
                  <br /><br />
                  Your session report will be available there!
              </p>
          </>
      } />
      <Route exact path="/register">
        <Register/>
      </Route>
      <Route exact path="/fileupload">
        <FileUpload/>
      </Route>
      <Route exact path="/reports">
        <Reports/>
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