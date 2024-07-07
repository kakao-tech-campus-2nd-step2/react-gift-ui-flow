import Container from '@components/atoms/container/Container';
import Page from '@components/templates/Page';
import { css } from '@emotion/react';
import Button from '@components/atoms/button/Button';
import { useCallback, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import Paths from '@constants/Paths';
import { LoginContext } from '@/providers/LoginContextProvider';

const GreetingTitle = styled.h1`
  font-weight: bold;
  font-size: 36px
`;

function MyPage() {
  const { isLoggedIn, setIsLoggedIn, username } = useContext(LoginContext);
  const navigate = useNavigate();

  const onLogoutClick = useCallback(() => {
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(Paths.LOGIN_PAGE);
    }
  }, [isLoggedIn, navigate]);

  return (
    <Page isLoggedIn>
      <Container
        elementSize="full-width"
        justifyContent="center"
        alignItems="center"
      >
        <Container
          padding="80px 0px 120px"
          flexDirection="column"
          alignItems="center"
        >
          <GreetingTitle>
            {username}
            님 안녕하세요!
          </GreetingTitle>
          <div css={css`
            height: 64px;
          `}
          />
          <Button
            elementSize="small"
            text="로그아웃"
            theme="darkGray"
            style={{
              width: '100%',
              maxWidth: '200px',
            }}
            onClick={onLogoutClick}
          />
        </Container>
      </Container>
    </Page>
  );
}

export default MyPage;
