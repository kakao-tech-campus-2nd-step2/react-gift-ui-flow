import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  margin-top: 15px;
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 18px;
`;

const LoginLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 16px;
  outlint: none;

  &:focus {
    outline: none;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>선물하기</Title>
      <LoginLink to="/login">로그인</LoginLink>
    </HeaderContainer>
  );
};

export default Header;
