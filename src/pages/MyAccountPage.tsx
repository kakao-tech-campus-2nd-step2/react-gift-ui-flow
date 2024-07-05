import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/App-core/AuthContext';

const MyAccountPage = () => {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <PageWrapper>
      <Greeting>{user}님 안녕하세요!</Greeting>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Greeting = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
`;

export default MyAccountPage;
