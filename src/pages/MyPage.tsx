import { Button } from '@/components/common/Button';
import { useNavigate } from 'react-router-dom';
import { useUserInfo } from '@/providers/AuthProvider';
import { BodyWrapper } from '@/pages/MainPage';
import styled from '@emotion/styled';
import routePath from '@/routes/path';

const MyPage = () => {
  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    handleUser('logout');
  };

  const navigate = useNavigate();

  const { handleUser } = useUserInfo();

  const handleLink = () => {
    navigate(routePath.home);
    handleLogout();
  };

  const name = sessionStorage.getItem('authToken');

  return (
    <MyPageWrapper>
      <h1>{name}님 안녕하세요!</h1>
      <MyPageButton onClick={handleLink} size="responsive">
        로그아웃
      </MyPageButton>
    </MyPageWrapper>
  );
};

export default MyPage;

const MyPageWrapper = styled(BodyWrapper)`
  height: 80vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const MyPageButton = styled(Button)`
  width: 50%;
`;
