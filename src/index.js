
// import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
import 'firebase/functions';
import { createStore, combineReducers } from 'redux';
import {
  ReactReduxFirebaseProvider,
  firebaseReducer,
} from 'react-redux-firebase';
import { composeWithDevTools } from 'redux-devtools-extension';


const firebaseConfig = {
  apiKey: "AIzaSyAIYaOq-GsuIvs25To4j1_bIm6ShKe1CtQ",
  authDomain: "engauge2020-44155.firebaseapp.com",
  databaseURL: "https://engauge2020-44155.firebaseio.com",
  projectId: "engauge2020-44155",
  storageBucket: "engauge2020-44155.appspot.com",
  messagingSenderId: "489182074574",
  appId: "1:489182074574:web:758835a05e8d6c3330229f"
};

firebase.initializeApp(firebaseConfig);
// firebase.functions().useFunctionsEmulator('http://localhost:5001');

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
});

// Create store with reducers and initial state
const store = createStore(rootReducer, composeWithDevTools());

// react-redux-firebase config
const rrfConfig = {
  preserveOnLogout: ['homepage'],
  userProfile: 'users',
};


const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root'),
);