import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'firebase/auth'
import firebase from "firebase/compat";

const firebaseConfig = {
    apiKey: "AIzaSyDZU2NCEtCH6xwasGHqA9_bcofjDAJLtM0",
    authDomain: "convertor-6acac.firebaseapp.com",
    databaseURL: "https://convertor-6acac-default-rtdb.firebaseio.com",
    projectId: "convertor-6acac",
    storageBucket: "convertor-6acac.appspot.com",
    messagingSenderId: "1034399490431",
    appId: "1:1034399490431:web:c34d6ace99049339033a4a"
};
firebase.initializeApp(firebaseConfig)

export const Context = createContext(null)

const auth = firebase.auth()
ReactDOM.render(
  <React.StrictMode>
      <Context.Provider value={{
          firebase,
          auth
      }}>
      <App/>
      </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
