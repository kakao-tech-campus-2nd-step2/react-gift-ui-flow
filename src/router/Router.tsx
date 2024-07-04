import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '@/Layout';
import Home from '@/Pages/Home';
import Login from '@/Pages/Login';
import MyAccount from '@/Pages/MyAccount'; // 주석 해제
import Theme from '@/Pages/Theme';

import { ROUTE_PATHS } from './paths';

interface RoutesPageProps {
  isLoggedIn: boolean;
  onLogin: () => void;
  onLogout: () => void;
}

const RoutesPage: React.FC<RoutesPageProps> = ({ isLoggedIn, onLogin, onLogout }) => {
  return (
    <Routes>
      <Route path={ROUTE_PATHS.ROOT} element={<Layout isLoggedIn={isLoggedIn} />}>
        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path={ROUTE_PATHS.THEME} element={<Theme />} />
        <Route path={ROUTE_PATHS.MYPAGE} element={<MyAccount onLogout={onLogout} />} /> {/* 주석 해제 및 onLogout prop 추가 */}
      </Route>
      <Route path={ROUTE_PATHS.LOGIN} element={<Login onLogin={onLogin} />} />
    </Routes>
  );
};

export default RoutesPage;
