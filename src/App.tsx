import React from 'react';
import { createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation } from 'react-router-dom';

import Footer from '@/components/common/Footer/Footer';
import Header from '@/components/common/Header/Header';
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
    // 로그인하지 않은 경우 로그인 페이지로 이동
    return <Navigate to="/login" state={{ from: location }} replace />;
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
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "theme/:themeKey",
        element: <ThemePage />,
      },
      {
        path: "my-account",
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
