import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyAccountPage from '@/pages/MyAccountPage';
import ThemePage from '@/pages/ThemePage';

import { AuthRoute } from './AuthRoute';
import { ROUTE_PATH } from './constants';

export const router = createBrowserRouter([
  {
    path: ROUTE_PATH.MAIN_PAGE,
    element: <App />,
    children: [
      {
        path: ROUTE_PATH.MAIN_PAGE,
        element: <MainPage />,
      },
      {
        path: ROUTE_PATH.LOGIN_PAGE,
        element: <LoginPage />,
      },
      {
        element: <AuthRoute />,
        children: [
          {
            path: ROUTE_PATH.THEME_PAGE,
            element: <ThemePage />,
          },
          {
            path: ROUTE_PATH.MYACCOUNT_PAGE,
            element: <MyAccountPage />,
          },
        ],
      },
    ],
  },
]);
