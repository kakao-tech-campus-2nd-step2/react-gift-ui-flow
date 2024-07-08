import styled from '@emotion/styled';

import { ContainerJustifyContentType } from '@/components/atoms/FlatFlex/types';
import { Paragraph } from '@/components/atoms/Paragraph';
import { CenteringContainer } from '@/components/molecules/CenteringContainer';

export const Footer = () => {
  return (
    <FooterWrapper>
      <CenteringContainer justifyContent={ContainerJustifyContentType.flexStart} maxWidth="1024px">
        <Paragraph content="카카오톡 선물하기" />
      </CenteringContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  padding: 40px 16px 120px;
  width: 100%;
  max-width: 100vw;
  background-color: #fafafc;
  box-sizing: border-box;
`;
