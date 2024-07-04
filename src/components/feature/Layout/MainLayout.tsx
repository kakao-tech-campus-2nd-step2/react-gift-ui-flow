import styled from '@emotion/styled';
import { Outlet, useLocation } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';

import LoginPage from '@/pages/LoginPage';

export const Main = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 54px;
`;
export const MainLayout = () => {
  const location = useLocation();
  const hideLayout = location.pathname === '/login';

  if (hideLayout) return <LoginPage />;

  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};
