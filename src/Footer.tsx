import styled from '@emotion/styled';
import React from 'react';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 My App</p>
    </FooterContainer>
  );
};

export default Footer;
