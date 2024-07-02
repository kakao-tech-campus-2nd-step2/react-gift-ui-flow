import styled from '@emotion/styled';
import React from 'react';

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #333;
  padding: 10px 20px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>카카오톡 선물하기</p>
    </FooterContainer>
  );
};

export default Footer;
