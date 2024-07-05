import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/auth/useAuth';

export const AuthRoute = () => {
  const { user } = useAuth();

  return user ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};
