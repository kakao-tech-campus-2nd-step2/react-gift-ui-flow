import styled from '@emotion/styled';
import React from 'react';

const FooterWrapper = styled.footer`
  padding: 20px;
  background-color: #f8f9fa;
  text-align: center;
  width: 100%;
  margin-top: auto;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <p>카카오톡 선물하기</p>
    </FooterWrapper>
  );
};

export default Footer;
