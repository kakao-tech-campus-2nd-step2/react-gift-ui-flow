import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { colors, fontsizes } from '@/styles/variants';
import { useAuth } from '@/utils/hooks/useAuth';

import { Container } from '../layouts/Container';

export const Header = () => {
  const navigate = useNavigate();
  const { isLogin } = useAuth();

  const moveToMain = () => {
    navigate('/');
  };
  const moveToLogin = () => {
    navigate('/login');
  };
  const moveToMyAccount = () => {
    navigate('/my-account');
  };
  return (
    <Wrapper>
      <Container>
        <Buttons>
          <TitleButton onClick={moveToMain}>선물하기</TitleButton>
          {isLogin ? (
            <ButtonModal onClick={moveToMyAccount}>내 계정</ButtonModal>
          ) : (
            <ButtonModal onClick={moveToLogin}>로그인</ButtonModal>
          )}
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

const ButtonModal = styled.button({
  fontSize: fontsizes.df,
  fontFamily: 'Pretendard-Regular',
});
