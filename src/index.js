import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import ResetCss from './styles/Reset'

ReactDOM.render(
  <React.StrictMode>
    <ResetCss />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);