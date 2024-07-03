import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@components/Layout/Container';
import {
  HeaderSection,
  HeaderLabel,
  HeaderTitle,
  HeaderDescription,
} from '@pages/ThemePage/ThemePage.styles';

const ThemePage = () => {
  const location = useLocation();

  return (
    <HeaderSection backgroundColor={location.state?.backgroundColor}>
      <Container
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Container
          width="100%"
          maxWidth="1024px"
          flexDirection="column"
        >
          <HeaderLabel>{location.state?.label}</HeaderLabel>
          <HeaderTitle>{location.state?.title}</HeaderTitle>
          <HeaderDescription>{location.state?.description}</HeaderDescription>
        </Container>
      </Container>
    </HeaderSection>
  );
};

export default ThemePage;
