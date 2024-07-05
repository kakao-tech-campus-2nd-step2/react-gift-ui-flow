import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/auth/useAuth';

export const ProtectedRoute = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};
