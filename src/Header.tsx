import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';


import { useAuth } from './ContextApi';


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
  const { isLoggedIn } = useAuth(); // useAuth hook을 이용해 isLoggedIn 상태 가져오기


  return (
    <HeaderContainer>
      <Title>선물하기</Title>
      {isLoggedIn ? (
        <LoginLink to="/my-account">내 계정</LoginLink> // 로그인 한 상태인 경우 "내 계정" 버튼 표시
      ) : (
        <LoginLink to="/login">로그인</LoginLink> // 로그인 하지 않은 경우 "로그인" 버튼 표시
      )}
    </HeaderContainer>
  );
};

export default Header;
