import { useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { Footer } from '@/components/common/Footer/Footer';
import { Header } from '@/components/common/Header/Header';

import { AuthProvider, useAuth } from './contexts/AuthContext';
import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { ThemePage } from './pages/ThemePage';

const PrivateRoute = ({ element }: { element: React.ReactElement }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const { isLoggedIn } = useAuth();
  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header />
          <MainPage />
          <Footer />
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          <LoginPage />
        </>
      ),
    },
    {
      path: '/my-account',
      element: <PrivateRoute element={<MyAccountPage />} />,
    },
    {
      path: '/theme/:themeKey',
      element: (
        <>
          <Header />
          <ThemePage />
          <Footer />
        </>
      ),
    },
  ]);

  return <RouterProvider router={routes} />;
};

const App = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
