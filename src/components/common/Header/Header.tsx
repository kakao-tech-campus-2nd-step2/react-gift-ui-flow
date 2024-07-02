import styled from '@emotion/styled';

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
  background: 'none',
  border: 'none',
  fontSize: '16px',
  cursor: 'pointer',
});

const LoginButton = styled.button({
  background: 'none',
  border: 'none',
  fontSize: '14px',
  cursor: 'pointer',
});
