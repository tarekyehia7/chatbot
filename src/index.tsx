import React from 'react';
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import App from './App';
import store from './store/store';
import { theme } from './theme/theme';


render(
  <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
  </Provider>,
  document.getElementById('root')
);