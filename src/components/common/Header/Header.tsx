import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { colors, fontsizes } from '@/styles/variants';

import { Container } from '../layouts/Container';

export const Header = () => {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/');
  };
  const moveToLogin = () => {
    navigate('/login');
  };
  return (
    <Wrapper>
      <Container>
        <Buttons>
          <TitleButton onClick={moveToMain}>선물하기</TitleButton>
          <LoginButton onClick={moveToLogin}>로그인</LoginButton>
        </Buttons>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.header({
  position: 'fixed',
  zIndex: '9999',
  width: '100%',
  maxWidth: '100vw',
  height: '54px',
  backgroundColor: colors.white,
  padding: '0 16px',
  display: 'flex',
  alignItems: 'center',
});

const Buttons = styled.div({
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
