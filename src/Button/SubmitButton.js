import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Button.css';

class SubmitButton extends React.Component {
    constructor(props) {
      super(props);
      this.eventHandler = this.eventHandler.bind(this); //neccessary to make sure 'this' works in the callback.
    }

    eventHandler(event) {
      alert('Submitted ');
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.eventHandler}>
          <button type="submit"  className="sbutton" value="Submit">Submit</button>
        </form>
      );
    }
  }
  
  export default SubmitButton;

  ReactDOM.render(<SubmitButton />, document.getElementById('root'));