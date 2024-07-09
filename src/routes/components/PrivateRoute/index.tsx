import React from 'react';
import { useAuth } from '@context/auth/useAuth';
import { ROUTE_PATH } from '@routes/path';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTE_PATH.LOGIN} />;
}
