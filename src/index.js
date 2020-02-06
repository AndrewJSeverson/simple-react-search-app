import React, { Suspense } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MuiThemeProvider,
  StylesProvider,
} from '@material-ui/core/styles';

import './index.scss';
import App from './components/app';
import store from './redux/store';
import theme from './utils/theme';
import generateClassName from './utils/generateClassName';
import './utils/promise-polyfill';
import * as serviceWorker from './serviceWorker';

const renderApp = () => {
  render(
    /*
      Suspense suspends your component rendering and renders a fallback
      component until a condition is met. For example, it can render a
      loader while waiting for resources,
    */
    <Suspense fallback={<div />}>
      <StylesProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>
        </MuiThemeProvider>
      </StylesProvider>
    </Suspense>,
    document.getElementById('root'),
  );

  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
};

if (
  'fetch' in window
  && 'URL' in window
  && 'Map' in window
  && 'forEach' in NodeList.prototype
  && 'startsWith' in String.prototype
  && 'endsWith' in String.prototype
  && 'includes' in String.prototype
  && 'includes' in Array.prototype
  && 'assign' in Object
  && 'entries' in Object
  && 'keys' in Object
) {
  renderApp();
} else {
  import('./utils/polyfills.js').then(renderApp);
}
