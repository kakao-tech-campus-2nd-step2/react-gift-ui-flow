import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const WelcomeMessage = styled.h1`
  font-size: 24px;
  padding-bottom: 30px;
`;

const MyAccount: React.FC = () => {
  const { userId, isLoggedIn, logout, isInitialized } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isInitialized && !isLoggedIn) {
      navigate('/login', { state: { from: '/my-account' } });
    }
  }, [isLoggedIn, isInitialized, navigate]);

  if (!isInitialized) return null;

  return (
    <Container>
      <WelcomeMessage>{userId}님 안녕하세요!</WelcomeMessage>
      <Button
        theme="darkGray"
        size="small"
        style={{ width: '200px' }}
        onClick={() => {
          logout();
          navigate('/');
        }}
      >
        로그아웃
      </Button>
    </Container>
  );
};

export default MyAccount;
