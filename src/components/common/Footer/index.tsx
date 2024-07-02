import React from 'react';
import styled from '@emotion/styled';
import Inner from '@components/common/Layout/Inner';

export default function Footer() {
  return (
    <FooterContainer>
      <Inner maxWidth={1024}>
        <p>카카오톡 선물하기</p>
      </Inner>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding-top: 16px;
  padding-bottom: 120px;
`;
