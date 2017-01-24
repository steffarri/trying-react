import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import Modal from 'react-awesome-modal';
import Examples from './modal';
import './contact.css';





class Contact extends React.Component {
    render() {
        return (
            <div>
            <h2>Contact</h2>
            <p>This is where the contact information goes</p>
            
            <br/><br/>
            <label>First: </label>
            
            <input  type="text" id="first_" />
            <br/><br/>
            <label>Last: </label>
            <input type="text" id="last_" />
            <br/><br/>
            <button id="button" >Submit</button>
            <br/><br/><br/>
            <div id="results">
            Your First name is: <label id="getfirst"></label>
            <br/>
            Your last name is: <label id="getlast"></label>
           
            
            </div>
            <br/>
            <br/>
            <button >Clear</button>
            <br/>

            
            </div>
        )
    }
}

export default Contact;

