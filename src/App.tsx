// import styled from '@emotion/styled';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { MyAccount } from '@/pages/MyAccount';

const App = () => {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { path: '/home', element: <Home /> },
      { path: '/theme:themeKey', element: <Theme /> },
      { path: '/login', element: <Login /> },
      { path: '/my-account', element: <MyAccount /> },
    ],
  },
]);

export default App;
