import styled from '@emotion/styled';
import React from 'react';

import { themes } from '@/styles/themes';

import { Container } from './layouts/Container';

type HeroProps = {
  themeKey: keyof typeof themes;
};

const HeroContainer = styled.header<{ backgroundColor: string }>`
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 50px 0;
  color: white;
`;

const HeroLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
`;

const HeroTitle = styled.h1`
  font-size: 30px;
  line-height: 40px;
  padding-top: 12px;
`;

const HeroDescription = styled.p`
  padding-top: 12px;
  font-size: 24px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.55);
`;

const HeroSection: React.FC<HeroProps> = ({ themeKey }) => {
  const theme = themes[themeKey];

  return (
    <Container backgroundColor={theme.backgroundColor}>
      <HeroContainer backgroundColor={theme.backgroundColor}>
        <HeroLabel>{theme.label}</HeroLabel>
        <HeroTitle>{theme.title}</HeroTitle>
        <HeroDescription>{theme.description}</HeroDescription>
      </HeroContainer>
    </Container>
  );
};

export default HeroSection;
