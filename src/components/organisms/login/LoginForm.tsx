import Container from '@components/atoms/container/Container';
import Input from '@components/atoms/input/Input';
import { css } from '@emotion/react';
import Button from '@components/atoms/button/Button';
import { useNavigate } from 'react-router-dom';
import { useCallback, useContext, useRef } from 'react';
import { LoginContext } from '@/providers/LoginContextProvider';

function LoginForm() {
  const navigate = useNavigate();
  const { setIsLoggedIn, setUsername } = useContext(LoginContext);

  const idRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onLoginClick = useCallback(() => {
    setIsLoggedIn(true);
    setUsername(idRef.current ? idRef.current.value : '');
    navigate(-1);
  }, [navigate, setIsLoggedIn, setUsername]);

  return (
    <Container
      elementSize="full-width"
      justifyContent="center"
      padding="20px"
    >
      <Container
        cssProps={{
          border: '1px solid rgba(0, 0, 0, 0.12)',
        }}
        maxWidth="580px"
        elementSize="full-width"
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
            ref={idRef}
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
            ref={passwordRef}
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
    </Container>
  );
}

export default LoginForm;
