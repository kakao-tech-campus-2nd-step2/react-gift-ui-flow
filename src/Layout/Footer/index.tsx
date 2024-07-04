import styled from '@emotion/styled';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Content>카카오톡 선물하기</Content>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  padding: 28px 16px 88px;
  width: 80%;
  margin: 0 auto;
  max-width: 100vw;
  background-color: #fafafc;
`;

const Content = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
