import React from 'react';
import styled from '@emotion/styled';
import { CenteredContainer } from '@components/common';

export default function Footer() {
  return (
    <FooterContainer>
      <CenteredContainer maxWidth="md">
        <p>카카오톡 선물하기</p>
      </CenteredContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding-top: 16px;
  padding-bottom: 120px;
  background-color: #fafafc;
`;
