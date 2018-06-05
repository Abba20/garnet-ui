import React, { Componet } from 'react';
import ReactDOM from 'react-dom';
//import Button from './Button/Button';
import './Button.css';

class AlertButton extends React.Component {
    constructor(props) {
        super(props);
        this.eventHandler = this.eventHandler.bind(this);  //neccessary to make sure 'this' works in the callback.
    }

    eventHandler(event){
        alert('Notificaton'); 
    }  

    render() {
        return (
            <div>
                <button className="alert" onClick={this.eventHandler}>Alert</button>              
            </div>
        );
    }
}

ReactDOM.render(<AlertButton/>, document.getElementById('root'));

export default AlertButton;