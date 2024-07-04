import { useNavigate } from 'react-router-dom';
import * as Styles from './styles';
import { PATHS } from '@/constants/Path';

const MyAccountPage = () => {
  const userName = sessionStorage.getItem('authToken') || 'User';
  const navigate = useNavigate();

  const HandlerLogout = () => {
    sessionStorage.removeItem('authToken');
    navigate(PATHS.MAIN);
  };

  return (
    <Styles.MyAccountPageLayout>
      {userName}님 안녕하세요!
      <Styles.BoxSpacer />
      <Styles.LogoutButton onClick={HandlerLogout}>로그아웃</Styles.LogoutButton>
    </Styles.MyAccountPageLayout>
  );
};

export default MyAccountPage;
