import { useUserInfo } from '@/providers/AuthProvider';
import { Navigate } from 'react-router-dom';
import MyPage from '@/pages/MyPage';

const PrivateRoute = () => {
  const { state } = useUserInfo();

  if (state === 'login') {
    return <MyPage />;
  }

  return <Navigate to="/login" replace />;
};
export default PrivateRoute;
