import styled from '@emotion/styled';

import { breakpoints, colors, fontsizes } from '@/styles/variants';

export const Footer = () => (
  <FooterContainer>
    <Inner>
      <FooterText>카카오톡 선물하기</FooterText>
    </Inner>
  </FooterContainer>
);

const FooterContainer = styled.div({
  width: '100%',
  maxWidth: '100vw',
  fontSize: fontsizes.df,
  backgroundColor: colors.lightGray,
  padding: '28px 16px 88px',
  [`@media screen and (max-width: ${breakpoints.sm})`]: {
    padding: '40px 16px 120px',
  },
});

const Inner = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const FooterText = styled.div({
  width: '100%',
  display: 'flex',
  maxWidth: '1024px',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontFamily: 'Pretendard-Regular',
});
