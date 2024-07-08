import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const { isAuthenticated, checkAuthToken } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthToken();
    setLoading(false);
  }, [checkAuthToken]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
