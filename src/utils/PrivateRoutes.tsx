import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const isLogin = !!sessionStorage.getItem('authToken');

  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
