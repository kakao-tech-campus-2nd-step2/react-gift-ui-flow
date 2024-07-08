import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/hooks/useAuthContext';
import { ROUTE_PATH } from '@/routes/constants';
import { colors, fontsizes } from '@/styles/variants';

import { Container } from '../layouts/Container';

export const Header = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthContext();

  const moveToMain = () => {
    navigate(ROUTE_PATH.MAIN_PAGE);
  };
  const moveToLogin = () => {
    navigate(ROUTE_PATH.LOGIN_PAGE);
  };
  const moveToMyAccount = () => {
    navigate(ROUTE_PATH.MYACCOUNT_PAGE);
  };
  return (
    <Wrapper>
      <Container>
        <Buttons>
          <TitleButton onClick={moveToMain}>선물하기</TitleButton>
          {isAuthenticated ? (
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
