import React, { Component } from 'react';
import Modal from 'react-awesome-modal';

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        
        

  
    clearit();
        
        this.setState({
            visible : false
            
        });


function clearit(First, Last)
{
     
var result = document.getElementById('First').value = "";
var resulttwo = document.getElementById('Last').value= "";
}

function getvalues()
{
    var firstname = document.getElementById('First').value;
    var lastname = document.getElementById('Last').value;
    alert(firstname);
}


    }

    render() {
        return (
            <section>
                <h1>React-Modal Examples</h1>
                <button id="modal" onClick={() => this.openModal()}> Click for Modal </button>
                <Modal 
                    visible={this.state.visible}
                    width="400"
                    height="300"
                    effect="fadeInUp"
                    onClickAway={() => this.closeModal()}
                >
                    <div>
                        <h1>Contact Card</h1>
                        <p>fill out the fields</p>
                        <br/><br/>
                        <div>
                        First Name:<br/>
                        <input type="text" id="First" />
                        </div>
                        <div>
                        Last Name: <br/>
                        <input type="text" id="Last" />
                        </div>
                        <br/><br/>
                        <button onClick={() => this.closeModal()}>Submit</button>
                        <br/>
                    </div>
                </Modal>

                
            </section>



        );
    }
}