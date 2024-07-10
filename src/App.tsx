import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AuthProvider, useAuth } from './context/AuthContext';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MyAccountPage from './pages/MyAccountPage';
import ThemePage from './pages/ThemePage';
import PrivateRoute from './PrivateRoute';
import { ROUTES } from './routes';

const LayoutWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoggedIn, username, logout } = useAuth();
  return (
    <Layout isLoggedIn={isLoggedIn} username={username} onLogout={logout}>
      {children}
    </Layout>
  );
};

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <LayoutWrapper>
        <HomePage />
      </LayoutWrapper>
    ),
  },
  {
    path: ROUTES.THEME,
    element: (
      <LayoutWrapper>
        <ThemePage />
      </LayoutWrapper>
    ),
  },
  {
    path: ROUTES.LOGIN,
    element: (
      <LayoutWrapper>
        <LoginPage />
      </LayoutWrapper>
    ),
  },
  {
    path: ROUTES.MY_ACCOUNT,
    element: (
      <LayoutWrapper>
        <PrivateRoute element={<MyAccountPage />} />
      </LayoutWrapper>
    ),
  },
]);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
