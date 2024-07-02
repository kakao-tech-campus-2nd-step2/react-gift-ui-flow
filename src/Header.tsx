import styled from '@emotion/styled';
import React from 'react';

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  font-size: 10px;
  font-weight: 700;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>선물하기</Title>
      {/* 네비게이션 링크같은 추가적인 content*/}
    </HeaderContainer>
  );
};

export default Header;
