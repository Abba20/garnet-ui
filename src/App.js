import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './Button/Button';
import AlertButton from './Button/AlertButton';
import SubmitButton from './Button/SubmitButton';
import ResetButton from './Button/ResetButton';

import Navigation from './Navigation/Navigation';
import NavigationUnresponsive from './Navigation/NavigationUnresponsive';
import NavigationResponsive from './Navigation/NavigationResponsive';

import Footer from './Footer/Footer';
import StackedFooter from './Footer/StackedFooter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Component Library</h1>
        </header>
        
        <div>
          <div className="buttonComponents"> 
            <Button/> 
            <AlertButton/>
            <ResetButton/>
            <SubmitButton/>
          </div>

          <div className="navigationComponents">
            <Navigation/>
            <NavigationUnresponsive/>
            <NavigationResponsive/>
          </div>

          <div className="footerComponents">
            <Footer/>
            <StackedFooter/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;