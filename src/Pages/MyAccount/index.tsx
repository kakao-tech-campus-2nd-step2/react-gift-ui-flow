import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface MyAccountProps {
  onLogout: () => void;
}

const MyAccount: React.FC<MyAccountProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Wrapper>
      <Title>내 계정</Title>
      <LogoutButton onClick={handleLogoutClick}>로그아웃</LogoutButton>
    </Wrapper>
  );
};

export default MyAccount;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  background-color: white;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
`;

const LogoutButton = styled.button`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  background-color: #ffeb00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
`;
