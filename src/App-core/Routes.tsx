import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
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
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: RouterPath.home,
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
  },
  {
    path: `${RouterPath.theme}/:category`,
    element: (
      <>
        <Header />
        <ThemePage />
        <Footer />
      </>
    ),
  },
  {
    path: RouterPath.login,
    element: (
      <>
        <Header />
        <LoginPage />
        <Footer />
      </>
    ),
  },
  {
    path: RouterPath.myAccount,
    element: (
      <>
        <Header />
        <ProtectedRoute>
          <MyAccountPage />
        </ProtectedRoute>
        <Footer />
      </>
    ),
  },
  {
    path: RouterPath.notFound,
    element: (
      <>
        <Header />
        <HomePage />
        <Footer />
      </>
    ),
  },
]);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};
