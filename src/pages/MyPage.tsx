import Container from '@components/atoms/container/Container';
import Page from '@components/templates/Page';
import { css } from '@emotion/react';
import Button from '@components/atoms/button/Button';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();
  const onLogoutClick = useCallback(() => {
    navigate('/', {
      state: {
        loginState: false,
      },
    });
  }, [navigate]);

  return (
    <Page>
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
          <h1 css={css`
            font-weight: 700;
            font-size: 36px
          `}
          >
            회원님 안녕하세요!
          </h1>
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
