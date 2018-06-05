/*import React from 'react';
import ReactDOM from 'react-dom';
//import Button from './Button/Button';

class SubmitButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <button onSubmit={() => {
                   alert('Your information has been submitted.');
                  } }>Submit</button>                  
            </div>
        );
    }
}

ReactDOM.render(<SubmitButton/>, document.getElementById('root'));

export default SubmitButton;
*/

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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
        <form className="sbutton" onSubmit={this.eventHandler}>
          <button type="submit" value="Submit">Submit</button>
        </form>
      );
    }
  }
  
  export default SubmitButton;

  ReactDOM.render(<SubmitButton />, document.getElementById('root'));