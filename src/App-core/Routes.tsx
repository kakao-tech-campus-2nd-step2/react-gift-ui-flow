import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Layout from '../components/common/Layout';
import { HomePage } from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import MyAccountPage from '../pages/MyAccountPage';
import ThemePage from '../pages/ThemePage';
import ProtectedRoute from './ProtectedRoute';

const RouterPath = {
  root: '/',
  home: '/home',
  theme: '/theme',
  login: '/login',
  myAccount: '/my-account',
  notFound: '*',
};

const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <Layout />,
    children: [
      { path: RouterPath.root, element: <HomePage /> },
      { path: RouterPath.home, element: <HomePage /> },
      { path: `${RouterPath.theme}/:category`, element: <ThemePage /> },
      { path: RouterPath.login, element: <LoginPage /> },
      {
        path: RouterPath.myAccount,
        element: <ProtectedRoute />,
        children: [{ path: RouterPath.myAccount, element: <MyAccountPage /> }],
      },
      { path: RouterPath.notFound, element: <HomePage /> },
    ],
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
