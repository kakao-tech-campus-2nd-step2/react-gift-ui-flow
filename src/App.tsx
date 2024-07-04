import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Footer } from '@/components/common/Footer/Footer';
import { Header } from '@/components/common/Header/Header';

import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { MyAccountPage } from './pages/MyAccountPage';
import { ThemePage } from './pages/ThemePage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Header isLoggedIn={false} />
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
      element: (
        <>
          <Header isLoggedIn={false} />
          <MyAccountPage />
          <Footer />
        </>
      ),
    },
    {
      path: '/theme/:themeKey',
      element: (
        <>
          <Header isLoggedIn={false} />
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
