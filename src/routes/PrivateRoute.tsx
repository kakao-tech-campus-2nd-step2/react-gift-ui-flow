import { useUserInfo } from '@/providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import MyPage from '@/pages/MyPage';
import routePath from '@/routes/path';

const PrivateRoute = () => {
  const { state } = useUserInfo();

  if (state === 'login') {
    return <MyPage />;
  }

  return <Navigate to={routePath.login} replace />;
};
export default PrivateRoute;
