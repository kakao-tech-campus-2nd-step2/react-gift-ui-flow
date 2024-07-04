import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Footer } from '@/components/common/Footer/Footer';
import { Header } from '@/components/common/Header/Header';

import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { ThemePage } from './pages/ThemePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header isLoggedIn={isLoggedIn} />
          <MainPage />
          <Footer />
        </>
      ),
    },
    {
      path: '/login',
      element: (
        <>
          <LoginPage onLogin={handleLogin} />
        </>
      ),
    },
    {
      path: '/my-account',
      element: (
        <>
          <Header isLoggedIn={isLoggedIn} />
          <MyAccountPage />
          <Footer />
        </>
      ),
    },
    {
      path: '/theme/:themeKey',
      element: (
        <>
          <Header isLoggedIn={isLoggedIn} />
          <ThemePage />
          <Footer />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
