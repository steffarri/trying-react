import React, { Component } from 'react';
import logo from './logo.svg';
import './stuff.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import Modal from 'react-awesome-modal';
import Examples from './modal';
var list = require('react-simple-list');
import ReactDOM from 'react-dom';
import './App.css';
var redux = require('redux');






class Stuff extends React.Component {
    render() {
        return (
            <div>
            <h2>Stuff</h2>
            
            <div id="parent">
            <div id="firstdiv">
            <br/><br/>
           <button id="button" onClick={clickingevent}>CLICK ME</button>
           <br/><br/>
           <button name="button" id="1" value= "ON" onChange={this.toggle}>Click</button>
           <br/>
           <label id="label"></label>
            </div>
            <div id="seconddiv">
            asdf
            </div>
            <div id="secondsecond">
            placeholder
            </div>
            <div id="sub">
            <div id="thirddiv">
            adsf
            </div>
            </div>
            </div>
            </div>

        )
    }
}

export default Stuff;



function clickingevent()
{
    alert("Regular Javascript Alert goes here");
}



