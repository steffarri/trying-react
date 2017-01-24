import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import Modal from 'react-awesome-modal';
import Examples from './modal';





class Home extends React.Component {
    render() {
        return (
            <div>
            <h2>Home</h2>
            <br/><br/>
            <Hello now="Stephanie"/>
            
    <div>   
<p>Textbox: </p>
<Textbox/>
<br/><br/>
 <button onClick={showAlert} id="button">Submit</button>
 <Alert stack={{limit: 8}} />
 <br/><br/>
 <Examples/>
 <br/><br/>
 <label id="llabel">label</label>
 <br/>
 <br/>
 </div>
 </div>


    )
}

}


export default Home;

var Hello = React.createClass ({
          render: function () {
            return <div>
            <h1> Hello {this.props.now}</h1>
            </div>;
          }
        });

 var Textbox = React.createClass({
    render: function() {
        return <input type="text" id="maintextbox" />;
    }
  });

  
  function showAlert(maintextbox)
  {

    var result = document.getElementById('maintextbox').value;
    if (result === "")
    {
      errorAlert();
    }
    else if (result !== "")
    {
    Alert.success('Submit Successfully', {
    effect: 'bouncyflip',
    timeout: 4000
    });
    clear();
    }
   
  }

  function errorAlert()
  {
    Alert.error('No text in textbox', {
      effect: 'bouncyflip',
      timeout: 4000
    });
  }

  function clear(maintextbox)
  {
    var result = document.getElementById('maintextbox').value = "";
    
  }

function clickformodal()
{
    <Examples/>
}

