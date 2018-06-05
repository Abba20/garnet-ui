import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.eventHandler = this.eventHandler.bind(this);  //neccessary to make sure 'this' works in the callback.
    }

    eventHandler(event){
        <a href="https://reactjs.org/"></a>
    }  

    render() {
        return (
            <div>
                <button className="button1" onClick={this.eventHandler}>Press Me</button>
            </div>
        );
    }
}

ReactDOM.render(<Button/>, document.getElementById('root'));

export default Button;