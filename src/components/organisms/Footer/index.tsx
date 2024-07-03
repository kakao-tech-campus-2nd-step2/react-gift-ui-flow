import styled from '@emotion/styled';

import { Container } from '@/components/atoms/Container';
import { ContainerJustifyContentType } from '@/components/atoms/Container/types';
import { Paragraph } from '@/components/atoms/Paragraph';

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container justifyContent={ContainerJustifyContentType.flexStart}>
        <Paragraph content="카카오톡 선물하기" />
      </Container>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 40px 16px 120px;
  width: 100%;
  max-width: 100vw;
  background-color: #fafafc;
`;
