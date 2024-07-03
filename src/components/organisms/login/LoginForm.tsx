import Container from '@components/atoms/container/Container';
import Input from '@components/atoms/input/Input';
import { css } from '@emotion/react';
import Button from '@components/atoms/button/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

function LoginForm() {
  const navigate = useNavigate();
  const onLoginClick = useCallback(() => {
    navigate('/', {
      state: {
        loginState: true,
      },
    });
  }, [navigate]);

  return (
    <Container
      elementSize="full-width"
      cssProps={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
      }}
      maxWidth="580px"
    >
      <Container
        elementSize="full-width"
        flexDirection="column"
        padding="60px 52px"
      >
        <Input
          elementSize={{
            width: '100%',
            height: '46px',
          }}
          placeholder="이름"
        />
        <div css={css`
            height: 16px;
        `}
        />
        <Input
          elementSize={{
            width: '100%',
            height: '46px',
          }}
          placeholder="비밀번호"
          type="password"
        />
        <div css={css`
            height: 60px;
        `}
        />
        <Button
          theme="kakao"
          elementSize={{
            width: '100%',
            height: '60px',
          }}
          text="로그인"
          onClick={onLoginClick}
        />
      </Container>
    </Container>
  );
}

export default LoginForm;
