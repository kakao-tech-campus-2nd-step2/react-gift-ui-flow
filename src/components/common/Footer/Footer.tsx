import styled from '@emotion/styled';

import { breakpoints, colors, fontsizes } from '@/styles/variants';

import { Container } from '../layouts/Container';

export const Footer = () => (
  <FooterWrapper>
    <Container>카카오톡 선물하기</Container>
  </FooterWrapper>
);

const FooterWrapper = styled.div({
  width: '100%',
  maxWidth: '100vw',
  fontSize: fontsizes.df,
  backgroundColor: colors.lightGray,
  padding: '28px 16px 88px',
  [`@media screen and (max-width: ${breakpoints.sm})`]: {
    padding: '40px 16px 120px',
  },
});
