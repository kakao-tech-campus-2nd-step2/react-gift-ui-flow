import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { MyAccountPage } from '@/pages/MyAccountPage';
import { ThemePage } from '@/pages/ThemePage';

const ROUTES = {
  HOME: '/',
  THEME: '/theme/:themeKey',
  LOGIN: '/login',
  MY_ACCOUNT: '/my-account',
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path={ROUTES.THEME} element={<ThemePage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.MY_ACCOUNT} element={<MyAccountPage />} />
      </Routes>
    </BrowserRouter>
  );
};
