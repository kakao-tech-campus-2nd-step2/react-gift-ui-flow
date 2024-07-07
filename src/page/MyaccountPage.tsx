import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/AuthContext';
import { Header } from '@/components/Header';

const MyAccountPage: React.FC = () => {
  const { isAuthenticated, username, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <AccountPageContainer>
      <Header />
      <Greeting>{username}님 안녕하세요 !</Greeting>
      <LogoutButton onClick={logout}>로그아웃</LogoutButton>
    </AccountPageContainer>
  );
};

const AccountPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px 120px;
  height: 100vh;
  text-align: center;
`;

const Greeting = styled.h1`
  padding: 80px 0px 60px;
  font-size: 36px;
  font-weight: 700;
`;

const LogoutButton = styled.button`
  width: 200px;
  padding: 10px;
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  height: 40px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background-color: rgb(80, 80, 80);
  }

  &:focus {
    outline: none;
  }
`;

export default MyAccountPage;
