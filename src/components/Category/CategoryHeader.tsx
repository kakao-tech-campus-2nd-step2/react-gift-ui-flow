import styled from '@emotion/styled';
import React from 'react';

type HeaderProps = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
};

const Header: React.FC<HeaderProps> = ({ label, title, description, backgroundColor }) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <HeaderLabel>{label}</HeaderLabel>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDescription>{description}</HeaderDescription>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 20px;
  text-align: center;
  color: #fff;
`;

const HeaderLabel = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const HeaderTitle = styled.h1`
  font-size: 32px;
  margin: 10px 0 0 0;
`;

const HeaderDescription = styled.p`
  font-size: 18px;
  margin: 10px 0 0 0;
`;
