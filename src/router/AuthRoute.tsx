import { Navigate, Outlet } from 'react-router-dom';

import ROUTES from '@/constants/routes';
import { useAuth } from '@/context/auth/useAuth';

export const AuthRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};
