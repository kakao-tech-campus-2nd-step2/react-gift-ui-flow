import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { useAuth } from '@/context/AuthContext';
import Layout from '@/Layout';
import Home from '@/Pages/Home';
import Login from '@/Pages/Login';
import MyAccount from '@/Pages/MyAccount';
import Theme from '@/Pages/Theme';

import { ROUTE_PATHS } from './paths';

interface ProtectedRouteProps {
  element: React.ReactElement;
  onLogout?: () => void; // 추가적인 props를 허용
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element, ...rest }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return isLoggedIn ? React.cloneElement(element, { ...rest }) : <Navigate to={ROUTE_PATHS.LOGIN} state={{ from: location }} />;
};

const RoutesPage: React.FC = () => {
  const { isLoggedIn, logout } = useAuth();

  return (
    <Routes>
      <Route path={ROUTE_PATHS.ROOT} element={<Layout isLoggedIn={isLoggedIn} />}>
        <Route index element={<Home />} />
        <Route path={ROUTE_PATHS.HOME} element={<Home />} />
        <Route path={ROUTE_PATHS.THEME} element={<Theme />} />
        <Route path={ROUTE_PATHS.MYPAGE} element={<ProtectedRoute element={<MyAccount onLogout={logout}/>} />} />
      </Route>
      <Route path={ROUTE_PATHS.LOGIN} element={<Login />} />
    </Routes>
  );
};

export default RoutesPage;