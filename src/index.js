import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import UserDetails from './UserDetails';
import Maps from './Maps';
import Person from './Learn';
ReactDOM.render(<UserDetails />, document.getElementById('root'));
// ReactDOM.render(<Maps />, document.getElementById('mapid'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
