import React, { ChangeEvent, useState } from 'react';
import { Input, Button, Image } from '@components/common';
import styled from '@emotion/styled';
import kakaoLogo from '@assets/images/kakao-logo.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@routes/constants';

export default function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<{ userName: string; userPassword: string }>({
    userName: '',
    userPassword: '',
  });

  const handleClick = () => {
    if (userInfo.userName !== '' || userInfo.userPassword !== '') navigate(ROUTE_PATH.HOME);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <Image src={kakaoLogo} alt="카카오 로고" width={88} height={88} />
      </ImageContainer>
      <FormContainer>
        <InputContainer>
          <label htmlFor="userName" className="sr-only">
            이름
          </label>
          <Input
            placeholder="이름"
            type="text"
            id="userName"
            name="userName"
            size="large"
            onChange={handleChange}
            value={userInfo.userName}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="userPassword" className="sr-only">
            비밀번호
          </label>
          <Input
            placeholder="비밀번호"
            type="password"
            id="userPassword"
            name="userPassword"
            size="large"
            onChange={handleChange}
            value={userInfo.userPassword}
          />
        </InputContainer>
        <Button theme="kakao" size="large" onClick={handleClick}>
          로그인
        </Button>
      </FormContainer>
    </LoginContainer>
  );
}

const LoginContainer = styled.div`
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

const FormContainer = styled.form`
  width: 580px;
  padding: 60px 52px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

const InputContainer = styled.div`
  margin-bottom: 28px;

  &:last-of-type {
    margin-bottom: 60px;
  }
`;
