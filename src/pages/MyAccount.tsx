import styled from '@emotion/styled';
import React from 'react';

import { Button } from '@/components/common/Button';
// import { useAuth } from '@/context/AuthContext';

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
  //  const { logout } = useAuth();

  return (
    <Container>
      <WelcomeMessage>{}님 안녕하세요!</WelcomeMessage>
      <Button theme="darkGray" size="small" style={{ width: '200px' }}>
        로그아웃
      </Button>
    </Container>
  );
};

export default MyAccount;
