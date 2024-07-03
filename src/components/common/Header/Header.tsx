import styled from '@emotion/styled';

import { colors, fontsizes } from '@/styles/variants';

export const Header = () => (
  <Wrapper>
    <HeaderContainer>
      <InnerContainer>
        <TitleButton>선물하기</TitleButton>
        <LoginButton>로그인</LoginButton>
      </InnerContainer>
    </HeaderContainer>
  </Wrapper>
);

const Wrapper = styled.div({
  position: 'fixed',
  zIndex: '9999',
  width: '100%',
  maxWidth: '100vw',
  height: '54px',
  backgroundColor: colors.white,
  padding: '0 16px',
});
const HeaderContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
const InnerContainer = styled.div({
  width: '100%',
  maxWidth: '1024px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
const TitleButton = styled.button({
  fontSize: fontsizes.lg,
  fontFamily: 'HSGooltokki',
});

const LoginButton = styled.button({
  fontSize: fontsizes.df,
  fontFamily: 'Pretendard-Regular',
});
