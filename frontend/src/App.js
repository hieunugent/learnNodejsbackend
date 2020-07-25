import React, { Component } from 'react';
import './App.css';
import Main from "./component/navigation/main";
import WelcomePage from "./component/navigation/tabComponent/welcomePage"
import { Router } from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
     
     
        <div className="App">
          <Main />
        </div>

      
    );
  }
}

export default App;
