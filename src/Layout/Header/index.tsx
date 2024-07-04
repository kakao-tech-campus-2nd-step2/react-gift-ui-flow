import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleAccountClick = () => {
    navigate('/my-account');
  };

  return (
    <HeaderWrapper>
      <Title>선물하기</Title>
      {isLoggedIn ? (
        <Button onClick={handleAccountClick}>내 계정</Button>
      ) : (
        <Button onClick={handleLoginClick}>로그인</Button>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #ffffff;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;

const Button = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;
