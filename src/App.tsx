// import styled from '@emotion/styled';

import { Footer } from '@/components/features/Footer';
import { Header } from '@/components/features/Header';
import { Layout } from '@/components/features/Layout';
import { Home } from '@/pages/Home';
// import { Theme } from '@/pages/Theme';
import { Login } from '@/pages/Login';
// import { MyAccount } from '@/pages/MyAccount';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

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
    element: <Layout />,
    children: [
      { path: '/home', element: <Home /> },
      // { path: '/theme:themeKey', element: <Theme /> },
      { path: '/login', element: <Login /> },
      // { path: '/my-account', element: <MyAccount /> },
    ],
  },
]);

export default App;
