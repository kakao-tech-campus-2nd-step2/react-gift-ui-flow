import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router-dom';

import { useAuthContext } from '@/hooks/useAuthContext';

import { ROUTE_PATH } from './constants';

export const AuthRoute = () => {
  const { isAuthenticated, loading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!isAuthenticated) {
      navigate(ROUTE_PATH.LOGIN_PAGE);
    }
  }, [isAuthenticated, navigate, loading]);

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTE_PATH.LOGIN_PAGE} />;
};
