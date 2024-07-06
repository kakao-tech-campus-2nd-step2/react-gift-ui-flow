import React, { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from '@/auth/AuthContext';
import { RouterPath } from '@/routes';

type RequireAuthProps = {
  children: ReactElement;
};

export const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const { authToken } = useAuth();

  if (!authToken) {
    return <Navigate to={RouterPath.login} replace />;
  }

  return children;
};

export default RequireAuth;
