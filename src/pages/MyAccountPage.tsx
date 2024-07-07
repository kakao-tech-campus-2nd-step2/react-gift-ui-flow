import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MyAccountPageProps {
  onLogout: () => void;
  loginId: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WelcomeText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const MyAccountPage: React.FC<MyAccountPageProps> = ({ onLogout, loginId }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Container>
      <WelcomeText>{loginId}님 안녕하세요!</WelcomeText>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
    </Container>
  );
};

export default MyAccountPage;
