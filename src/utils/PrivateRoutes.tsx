import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const isLogin = !!localStorage.getItem('authToken');

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
