import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App, Home, Theme, Login, MyAccount } from '@pages/index';
import PrivateRoute from './components/PrivateRoute';
import { ROUTE_PATH } from './path';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.HOME,
    element: <App />,
    children: [
      {
        path: ROUTE_PATH.HOME,
        element: <Home />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: ROUTE_PATH.THEME,
            element: <Theme />,
          },
          {
            path: ROUTE_PATH.MY_ACCOUNT,
            element: <MyAccount />,
          },
        ],
      },
      {
        path: ROUTE_PATH.LOGIN,
        element: <Login />,
      },
    ],
  },
]);
