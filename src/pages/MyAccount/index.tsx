import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/components/common/layouts/Container';
import { Button } from '@/components/common/Button';
import { useAuth } from '@/hooks/useAuth';
import styled from '@emotion/styled';

const MyAccount: React.FC = () => {
  const { authToken, setAuthToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
    navigate('/');
  };

  return (
    <StyledContainer>
      <h1>{authToken}님 안녕하세요!</h1>
      <StyledButton onClick={handleLogout}>로그아웃</StyledButton>
    </StyledContainer>
  );
};

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  text-align: center;
`;

const StyledButton = styled(Button)`
  background-color: #555555;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  width: 30%;
  height: 40px !important;
  max-width: 200px;
  margin: 0 auto;
  margin-top: 30px;
  &:hover {
    background-color: #444444;
  }
`;

export default MyAccount;
