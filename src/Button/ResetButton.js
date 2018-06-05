import React from 'react';
import ReactDOM from 'react-dom';
//import Button from './Button/Button';
import './Button.css';

class ResetButton extends React.Component {
    constructor(props) {
        super(props);
        this.eventHandler = this.eventHandler.bind(this);  //neccessary to make sure 'this' works in the callback.
    }

    eventHandler(event){
        ''; 
    }  

    render() {
        return (
            <div> 
                <button className="rbutton" onClick={this.eventHandler}>Reset</button>                  
            </div>
        );
    }
}

ReactDOM.render(<ResetButton/>, document.getElementById('root'));

export default ResetButton;