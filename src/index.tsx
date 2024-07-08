import '@/styles';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from '@/App';

import { UserInfoProvider } from './providers/UserInfoProviders';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserInfoProvider>
        <App />
      </UserInfoProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
