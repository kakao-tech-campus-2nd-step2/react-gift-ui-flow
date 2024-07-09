import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/AuthContext';
import { Button } from '@/components/common/Button';

const MyAccountPage: React.FC = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AccountContainer>
      <WelcomeMessage>{username}님 안녕하세요!</WelcomeMessage>
      <Button themeName="darkGray" size="responsive" onClick={handleLogout}>
        로그아웃
      </Button>
    </AccountContainer>
  );
};

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const WelcomeMessage = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export default MyAccountPage;
