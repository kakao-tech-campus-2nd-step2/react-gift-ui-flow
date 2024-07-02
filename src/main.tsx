import React from 'react';
import ReactDOM from 'react-dom/client';
import router from '@router';
import { RouterProvider } from 'react-router-dom';
import GlobalStyle from '@styles/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
);
