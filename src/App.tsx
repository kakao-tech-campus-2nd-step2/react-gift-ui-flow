import React from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation } from 'react-router-dom';

import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
import { ROUTES } from '@/constants/routes';
import LoginPage from '@/pages/Login';
import MainPage from '@/pages/Main';
import MyAccountPage from '@/pages/MyAccount';
import ThemePage from '@/pages/Theme';

import { AuthProvider, useAuth } from './AuthContext';
import { Container } from './components/common/layouts/Container';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return children;
};

const DefaultLayout: React.FC = () => (
  <div>
    <Header />
    <Container>
      <Outlet />
    </Container>
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: ROUTES.LOGIN,
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <DefaultLayout />,
    children: [
      {
        path: ROUTES.MAIN,
        element: <MainPage />,
      },
      {
        path: ROUTES.THEME,
        element: <ThemePage />,
      },
      {
        path: ROUTES.MY_ACCOUNT,
        element: (
          <RequireAuth>
            <MyAccountPage />
          </RequireAuth>
        ),
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  );
};

export default App;
