import { Route, Routes } from 'react-router-dom';

import  Layout  from '@/Layout';
import { Home } from '@/Pages/Home';
// import { Login } from '@/Pages/Login';
// import { MyAccount } from '@/Pages/MyAccount';
import Theme from '@/Pages/Theme';

import { ROUTE_PATHS } from './paths';

export const RoutesPage = () => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.ROOT} element={<Layout />}>
        <Route path={ROUTE_PATHS.ROOT} element={<Home />} />
        <Route path={ROUTE_PATHS.THEME} element={<Theme />} />
        {/* <Route path={ROUTE_PATHS.MYPAGE} element={<MyAccount />} /> */}
      </Route>
      {/* <Route path={ROUTE_PATHS.LOGIN} element={<Login />} /> */}
    </Routes>
  );
};
