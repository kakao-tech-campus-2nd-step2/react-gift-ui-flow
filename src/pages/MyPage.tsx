import Container from '@components/atoms/container/Container';
import Page from '@components/templates/Page';
import { css } from '@emotion/react';
import Button from '@components/atoms/button/Button';
import { useCallback } from 'react';
import styled from '@emotion/styled';

const GreetingTitle = styled.h1`
    font-weight: bold;
    font-size: 36px
`;

function MyPage() {
  const onLogoutClick = useCallback(() => {
  }, []);

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
            회원님 안녕하세요!
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
