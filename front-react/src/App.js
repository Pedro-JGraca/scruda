import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Login from './pages/login'
import DashBoard from './pages/dashboard'

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
        paper: '#BF4040',
      }

    }
  })

  return (
    <div >
      <ThemeProvider theme={theme}>
        <DashBoard />
      </ThemeProvider>
    </div>
  );
}

export default App;
