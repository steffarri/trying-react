import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import Modal from 'react-awesome-modal';
import Examples from './modal';
import Home from './home';
import { Router, Route, IndexRoute, browserHistory, RouteHandler, Link } from 'react-router';



class App extends Component {
  render() {
    return (
      
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h2>Welcome to React</h2>
          <br/>

          <div>
          <ul className="nav">
          <li><Link to = "/">Home</Link></li>
          <li><Link to ="stuff">Stuff</Link></li>
          <li><Link to = "contact">Contact</Link></li>
          </ul>
          
          </div>
         
        </div>
        
<div>
 {this.props.children}
</div>
</div>

    )}}


export default App;













  







