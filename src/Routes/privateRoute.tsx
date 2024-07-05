// src/components/PrivateRoute.tsx

import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/providers/AuthContextProvider';

type PrivateRouteProps = {
  element: React.ReactElement;
  path: string;
};

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const { authToken } = useAuth();

  return authToken ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
