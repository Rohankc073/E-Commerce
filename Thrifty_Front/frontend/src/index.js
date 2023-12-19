import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';

import './images/3.png'

import "./css/home.css"
// import ViewPage from "./pages/viewpage";

// import "./css/login.css"
// import RegisterUserForm from "./pages/register";
// import LoginPage from "./pages/login";
// import HomePage from "./pages/home";
// import SignUpForm from "./pages/register";
// import "../src/css/register.css"
import HomePage from "./pages/home";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
