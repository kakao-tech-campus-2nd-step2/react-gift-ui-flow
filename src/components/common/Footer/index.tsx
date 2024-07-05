import React from 'react';
import styled from '@emotion/styled';
import Inner from '@components/common/Layout/Inner';
import { BREAK_POINTS } from '@assets/styles/variants';

export default function Footer() {
  return (
    <FooterContainer>
      <Inner maxWidth={BREAK_POINTS.md}>
        <p>카카오톡 선물하기</p>
      </Inner>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding-top: 16px;
  padding-bottom: 120px;
  background-color: #fafafc;
`;
