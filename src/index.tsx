import './styles/css/reset.css';
import './styles/css/MainPage.css';
import './styles/css/index.css';
import './styles/css/LoginPage.css';
import './styles/css/MyAccountPage.css';
import './styles/css/Header.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
