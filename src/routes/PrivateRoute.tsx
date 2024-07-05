import { useUserInfo } from '@/providers/AuthProvider';
import LoginPage from '@/pages/LoginPage';
import MyPage from '@/pages/MyPage';

const PrivateRoute = () => {
  const { state } = useUserInfo();

  if (state === 'login') {
    return <MyPage />;
  }

  return <LoginPage />;
};
export default PrivateRoute;
