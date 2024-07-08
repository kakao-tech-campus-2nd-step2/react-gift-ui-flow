import styled from '@emotion/styled';
import React from 'react';

const Footer: React.FC = () => (
  <FooterContainer>
    <Inner>
      <FooterText>카카오톡 선물하기</FooterText>
    </Inner>
  </FooterContainer>
);

const FooterContainer = styled.footer`
  background-color: #FAFAFC;
  padding: 40px 16px 120px;
`;

const Inner = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 16px;
  color: #000;
`;

export default Footer;
