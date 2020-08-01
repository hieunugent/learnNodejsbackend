import React, { Component } from 'react';
import './App.css';
import Main from "./component/navigation/main";
import WelcomePage from "./component/navigation/tabComponent/welcomePage"
import { Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#819ca9',
      main: '#546e7a',
      dark: '#29434e',
      contrastText: '#fff',
    },
    secondary:{
      light: '#f9683a',
      main: '#bf360c',
      dark: '#870000',
      contrastText: '#fff',
    }

  },
 
  typography: { useNextVariants: true },
});
class App extends Component {
  
  render() {
    return (
     
     
        <div className="App">
        <MuiThemeProvider theme={theme}>
          <Main />  </MuiThemeProvider>
        </div>

      
    );
  }
}

export default App;
