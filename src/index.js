import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import GlobalStyle from './components/Styles/GlobalsStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <App />
    <GlobalStyle />
  </Fragment>
);
