import styled from '@emotion/styled';
import React from 'react';

type MyAccountProps = {
  name: string;
};

export const MyAccount: React.FC<MyAccountProps> = ({ name }) => {
  return (
    <LogoutContainer>
      <h1>{name}님 안녕하세요!</h1>
      <LogoutButton>로그아웃</LogoutButton>
    </LogoutContainer>
  );
};

const LogoutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoutButton = styled.button``;
