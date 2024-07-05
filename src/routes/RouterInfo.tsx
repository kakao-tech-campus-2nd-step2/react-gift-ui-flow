import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import Gift from '@/pages/Gift';
import { createBrowserRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styled from '@emotion/styled';
import PrivateRoute from '@/routes/PrivateRoute';

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Layout = () => {
  // header와 footer에 가리지 않에 padding 추가
  return (
    <Container>
      <Header />
      <main style={{ paddingBottom: '60px', paddingTop: '60px' }}>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

const RouterInfo = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: '/my-account',
        element: <PrivateRoute />,
      },
      {
        path: '/theme/:themekey',
        element: <Gift />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default RouterInfo;
