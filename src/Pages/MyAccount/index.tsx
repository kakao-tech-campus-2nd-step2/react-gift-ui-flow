import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 세션 스토리지에서 사용자 ID를 가져오는 함수
export const getAuthToken = (): string | null => {
  return sessionStorage.getItem('authToken');
};

interface MyAccountProps {
  onLogout: () => void;
}

const MyAccount: React.FC<MyAccountProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const token = getAuthToken();
    setUsername(token);
  }, []);

  const handleLogoutClick = () => {
    onLogout();
    navigate('/');
  };

  return (
    <Wrapper>
      <Title>{username ? `${username}님 반갑습니다!` : '반갑습니다!'}</Title>
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
