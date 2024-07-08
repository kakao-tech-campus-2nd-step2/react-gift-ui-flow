import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ROUTES from '@/constants/routes';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { HomePage } from '@/pages/HomePage';
import { LoginPage } from '@/pages/LoginPage';
import { MyAccountPage } from '@/pages/MyAccountPage';
import { ThemePage } from '@/pages/ThemePage';

import { AuthRoute } from './AuthRoute';
import { ProtectedRoute } from './ProtectedRoute';

export const Router = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.THEME} element={<ThemePage />} />
          <Route path={ROUTES.LOGIN} element={<AuthRoute />}>
            <Route index element={<LoginPage />} />
          </Route>
          <Route path={ROUTES.MY_ACCOUNT} element={<ProtectedRoute />}>
            <Route index element={<MyAccountPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};
