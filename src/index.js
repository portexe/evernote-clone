import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDrEaVM8VCSoK53fTX6pgHHwMSXuxfvs98",
  authDomain: "my-first-firebase-projec-2a252.firebaseapp.com",
  databaseURL: "https://my-first-firebase-projec-2a252.firebaseio.com",
  projectId: "my-first-firebase-projec-2a252",
  storageBucket: "my-first-firebase-projec-2a252.appspot.com",
  messagingSenderId: "432137360523",
  appId: "1:432137360523:web:7311c544d6d8c434e0708e",
  measurementId: "G-3MVN7NL3HD"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
