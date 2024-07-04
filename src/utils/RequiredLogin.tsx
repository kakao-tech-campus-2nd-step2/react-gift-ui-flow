import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';

export const RequiredLogin = () => {
  const { authToken } = useAuth();
  if (!authToken) {
    return <Navigate to="/login" replace={true} />;
  }
  return <Outlet />;
};
