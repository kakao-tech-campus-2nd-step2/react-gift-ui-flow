import styled from '@emotion/styled';
import React from 'react';

type HeaderProps = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
};

const ThemeHeader: React.FC<HeaderProps> = ({ label, title, description, backgroundColor }) => {
  return (
    <HeaderContainer backgroundColor={backgroundColor}>
      <HeaderLabel>{label}</HeaderLabel>
      <HeaderTitle>{title}</HeaderTitle>
      <HeaderDescription>{description}</HeaderDescription>
    </HeaderContainer>
  );
};

export default ThemeHeader;

const HeaderContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 5vh 15vh ;
  color: #fff;
`;

const HeaderLabel = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  rgba(255, 255, 255, 0.7);
`;

const HeaderTitle = styled.h1`
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-size: 18px;
  line-height: 26px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
`;

const HeaderDescription = styled.p`
  padding-top: 5px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.55);
  word-break: break-all;
`;
