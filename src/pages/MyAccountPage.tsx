import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const MyAccountPage: React.FC = () => {
  const { loginId, logout } = useAuth();
  const navigate = useNavigate();

  const handleUserLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <AccountContainer>
      <GreetingText>{loginId}님 안녕하세요!</GreetingText>
      <LogoutButton onClick={handleUserLogout}>로그아웃</LogoutButton>
    </AccountContainer>
  );
};

export default MyAccountPage;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const GreetingText = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const LogoutButton = styled.button`
  padding: 12px 24px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #555;
  }
`;
