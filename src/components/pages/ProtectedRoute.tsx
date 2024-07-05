import React from 'react';
import { Navigate } from 'react-router-dom';

import { useAuth } from './AuthContext';

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <>{element}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
