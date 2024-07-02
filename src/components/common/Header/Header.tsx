import styled from '@emotion/styled';

import { fontsizes } from '@/styles/variants';

export const Header = () => (
  <HeaderContainer>
    <TitleButton>선물하기</TitleButton>
    <LoginButton>로그인</LoginButton>
  </HeaderContainer>
);

const HeaderContainer = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 4px',
  boxSizing: 'border-box',
});

const TitleButton = styled.button({
  fontSize: fontsizes.lg,
  fontFamily: 'HSGooltokki',
});

const LoginButton = styled.button({
  fontSize: fontsizes.df,
  fontFamily: 'Pretendard-Regular',
});
