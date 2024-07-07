import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Container from '@components/Layout/Container';
import Image from '@components/Image/Image';
import {
  LoginContainer,
  ImageContainer,
  StyledInput,
  StyledButton,
} from '@pages/Login/LoginPage.styles';
import Input from '@components/Input/Input';
import Button from '@components/Button/Button';
import { AuthContext } from '@contexts/AuthContext';
import { ROUTE_PATHS } from '../../constants';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (id && password) {
      login(id);
      navigate(location.state?.from?.pathname || ROUTE_PATHS.ROOT);
      // eslint-disable-next-line no-alert
    } else alert('아이디와 비밀번호를 입력해주세요.');
  };

  return (
    <Container
      width="100vw"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <ImageContainer>
        <Image
          src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
          alt="kakao"
          width={88}
        />
      </ImageContainer>
      <LoginContainer>
        <form onSubmit={handleLogin}>
          <StyledInput>
            <Input
              inputSize="large"
              placeholder="이름"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </StyledInput>
          <StyledInput>
            <Input
              inputSize="large"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </StyledInput>
          <StyledButton>
            <Button theme="primary" size="medium">
              로그인
            </Button>
          </StyledButton>
        </form>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
