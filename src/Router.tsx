import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';
import LoginPage from '@/pages/LoginPage';
import MainPage from '@/pages/MainPage';
import MyAccountPage from '@/pages/MyAccountPage';
import ThemePage from '@/pages/ThemePage';

const routes = [
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
];

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes,
  },
]);

export default router;
