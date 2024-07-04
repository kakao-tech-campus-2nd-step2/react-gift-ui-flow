import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Footer } from '@/components/common/Footer/Footer';
import { Header } from '@/components/common/Header/Header';

import { LoginPage } from './pages/LoginPage';
import { MainPage } from './pages/MainPage';
import { MyAccountPage } from './pages/MyAccountPage';

const App = () => {
  const router = createBrowserRouter([
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
      element: (
        <>
          <Header />
          <MyAccountPage />
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
