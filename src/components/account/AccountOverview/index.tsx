import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@components/common';
import { useAuth } from '@context/auth/useAuth';
import { useSessionStorage } from '@hooks/useSessionStorage';

export default function AccountOverview() {
  const { logout } = useAuth();
  const [userName] = useSessionStorage('authToken', '');

  return (
    <MyAccountContainer>
      <Greeting>{userName}님 안녕하세요!</Greeting>
      <ButtonContainer>
        <Button size="small" theme="darkGray" onClick={logout}>
          로그아웃
        </Button>
      </ButtonContainer>
    </MyAccountContainer>
  );
}

const MyAccountContainer = styled.section`
  padding-top: 140px;
  padding-bottom: 120px;
`;

const Greeting = styled.p`
  font-size: 36px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 64px;
`;

const ButtonContainer = styled.div`
  max-width: 200px;
  margin: 0 auto;
`;
