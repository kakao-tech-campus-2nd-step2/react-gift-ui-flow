import React from 'react';
import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  background-color: #FAFAFA;
  color: #333333;
  padding: 10px 20px;
  text-align: left;
  height: 50px;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>카카오톡 선물하기</p>
    </FooterContainer>
  );
};

export default Footer;
