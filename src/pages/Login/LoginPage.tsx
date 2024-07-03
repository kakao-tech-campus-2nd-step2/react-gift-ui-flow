import React from 'react';
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

const LoginPage = () => (
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
      <StyledInput>
        <Input
          inputSize="large"
          placeholder="이름"
        />
      </StyledInput>
      <StyledInput>
        <Input
          inputSize="large"
          placeholder="비밀번호"
        />
      </StyledInput>
      <StyledButton>
        <Button
          theme="primary"
          size="medium"
        >
          로그인
        </Button>
      </StyledButton>
    </LoginContainer>
  </Container>
);

export default LoginPage;
