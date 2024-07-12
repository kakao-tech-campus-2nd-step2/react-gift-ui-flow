import React from 'react';
import styled from '@emotion/styled';
import { Image } from '@components/common';
import { LoginForm } from '@components/features/Login';
import kakaoLogo from '@assets/images/kakao-logo.svg';

const IMAGE_ALT = '카카오 로고';
const IMAGE_SIZE = 88;

export default function Login() {
  return (
    <LoginContainer>
      <ImageContainer>
        <Image src={kakaoLogo} alt={IMAGE_ALT} width={IMAGE_SIZE} height={IMAGE_SIZE} />
      </ImageContainer>
      <LoginForm />
    </LoginContainer>
  );
}

const LoginContainer = styled.section`
  height: 100vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
