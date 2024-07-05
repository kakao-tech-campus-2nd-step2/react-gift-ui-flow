import { Navigate, Outlet } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/auth/useAuth';

export const ProtectedRoute = () => {
  const { user } = useAuth();

  return user ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};
