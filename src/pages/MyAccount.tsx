import styled from '@emotion/styled';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '@/context/AuthContext';

type MyAccountProps = {
  name: string;
};

export const MyAccount: React.FC<MyAccountProps> = ({ name }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <LogoutContainer>
      <h1>{name}님 안녕하세요!</h1>
      <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
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

const LogoutButton = styled.button`
  cursor: pointer;
`;
