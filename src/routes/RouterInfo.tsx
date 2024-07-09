import MainPage from '@/pages/MainPage';
import LoginPage from '@/pages/LoginPage';
import GiftDetailPage from '@/pages/GiftDetailPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styled from '@emotion/styled';
import PrivateRoute from '@/routes/PrivateRoute';
import routePath from './path';

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
    path: routePath.root,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: routePath.myAccount,
        element: <PrivateRoute />,
      },
      {
        path: routePath.themekey,
        element: <GiftDetailPage />,
      },
      {
        path: routePath.theme,
        element: <Navigate to={routePath.home} replace />,
      },
    ],
  },
  {
    path: routePath.login,
    element: <LoginPage />,
  },
]);

export default RouterInfo;
