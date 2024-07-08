import styled from '@emotion/styled';
import React from 'react';

import { Button } from '../components/common/Button';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import { useAuth } from '../contexts/AuthContext';

const MyPage: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <Container>
      <Header />
      <Content>
        <WelcomeMessage>{user}님 안녕하세요!</WelcomeMessage>
        <Spacer />
        <LogoutButton onClick={logout}>로그아웃</LogoutButton>
      </Content>
      <Footer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding-top: 54px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

const WelcomeMessage = styled.h1`
  font-size: 34px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Spacer = styled.div`
  height: 64px;
`;

const LogoutButton = styled(Button)`
  display: flex;
  max-width: 200px;
  font-size: 20px;
  background-color: #333;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;

export default MyPage;
