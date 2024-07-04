import { Navigate, Outlet } from 'react-router-dom';

import { useAuth } from '@/context/AuthContext';

const PrivateRoute = () => {
  const { userId } = useAuth();

  return userId ? <Outlet /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
