import { Route, Routes } from 'react-router-dom';

import { Home } from '@/pages/Home';
import { Login } from '@/pages/Login';
import { MyAccount } from '@/pages/MyAccount';
import { Theme } from '@/pages/Theme';

import { Layout } from '../Layout';
import { ROUTE_PATHS } from './constants';

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.ROOT} element={<Layout />}>
        <Route path={ROUTE_PATHS.ROOT} element={<Home />} />
        <Route path={ROUTE_PATHS.THEME} element={<Theme />} />
        <Route path={ROUTE_PATHS.MYPAGE} element={<MyAccount />} />
      </Route>
      <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
    </Routes>
  );
};
