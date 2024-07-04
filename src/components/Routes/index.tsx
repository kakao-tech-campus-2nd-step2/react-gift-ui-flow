import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { MyAccount } from '@/pages/MyAccount';
import { Theme } from '@/pages/Theme';
import { UserInfo } from '@/providers/UserInfoProviders';

import { Layout } from '../Layout';
import { ROUTE_PATHS } from './constants';

export const RoutesPage = () => {
  const { userName } = useContext(UserInfo);
  const auth = sessionStorage.getItem('authToken');
  return (
    <Routes>
      <Route path={ROUTE_PATHS.ROOT} element={<Layout />}>
        <Route path={ROUTE_PATHS.ROOT} element={<Home />} />
        <Route path={ROUTE_PATHS.THEME} element={<Theme />} />
        {userName === auth ? (
          <Route path={ROUTE_PATHS.MYPAGE} element={<MyAccount />} />
        ) : (
          <Route path={ROUTE_PATHS.MYPAGE} element={<Login />} />
        )}
      </Route>
      <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
    </Routes>
  );
};
