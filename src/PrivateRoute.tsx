import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './context/AuthContext';
import { ROUTES } from './routes';

const PrivateRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { isLoggedIn } = useAuth();

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  return element;
};

export default PrivateRoute;
