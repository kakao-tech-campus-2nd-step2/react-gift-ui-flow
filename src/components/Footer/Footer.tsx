import React from 'react';
import { FooterContainer, Text } from './Footer.styles';
import Container from '../Layout/Container';

const Footer = () => (
  <FooterContainer>
    <Container
      maxWidth="1024px"
      flexDirection="column"
    >
      <Text>카카오톡 선물하기</Text>
    </Container>
  </FooterContainer>
);

export default Footer;
