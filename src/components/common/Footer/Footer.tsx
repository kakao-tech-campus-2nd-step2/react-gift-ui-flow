import styled from '@emotion/styled';
import React from 'react';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px;
  background-color: #e0e0e0;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FooterInner = styled.div`
  text-align: center;
  font-size: 18px;
  font-family: 'Arial, sans-serif';
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterInner>카카오톡 선물하기</FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
