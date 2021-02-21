import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme} >
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);