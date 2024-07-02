import styled from '@emotion/styled';
import React from 'react';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>My App</Title>
      {/* 네비게이션 링크같은 추가적인 content*/}
    </HeaderContainer>
  );
};

export default Header;
