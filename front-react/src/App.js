import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import React from 'react';
import Login from './pages/login'
import DashBoard from './pages/dashboard'
import Register from './pages/register';



function App() {

  const theme = createMuiTheme({
    spacing: 4,
    palette: {
      primary:{
        main: '#074585',
      },
      secondary:{
        main: '#BF4040',
      },
      background:{
        default: '#444',
        paper: '#888',
      }

    }
  })



  return (
    <div >
      <ThemeProvider theme={theme}>
        <Router>

          <Route path="/" exact render={() => (
            <Login />
            )}
          />

          <Route path="/register" exact render={() => (
            <Register />
            )}
          />

          <Route path="/dashboard" exact render={() => {
            //pegar validação de login
            return (<DashBoard />)
      
            }}
          />


        </Router>




        
      </ThemeProvider>
    </div>
  );
}

export default App;
