import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyAccountPage from '@/pages/MyAccountPage';
import ThemePage from '@/pages/ThemePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'theme/:themeKey',
        element: <ThemePage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'my-account',
        element: <MyAccountPage />,
      },
    ],
  },
]);

export default router;
