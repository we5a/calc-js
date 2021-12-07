import React, { useState } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

import Calculator from './components/Calculator/Calculator';

const theme = createTheme({
  palette: {
    primary: {
      main: grey[600]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
    </ThemeProvider>
  );
}

export default App;
