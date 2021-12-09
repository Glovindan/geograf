import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import './index.css';
import App from './App';

const options = {
  position: 'bottom right',
  timeout: 2000,
  offset: '5px',
  transition: 'scale'
}

ReactDOM.render(
  <React.StrictMode>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
