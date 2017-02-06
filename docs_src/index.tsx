import 'console-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const history = browserHistory;

ReactDOM.render(
  <App
    history={history}
  />,
  document.getElementById('app')
);
