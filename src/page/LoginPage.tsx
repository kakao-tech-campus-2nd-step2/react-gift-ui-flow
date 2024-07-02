import styled from '@emotion/styled';
import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 로그인 처리 로직을 구현할 수 있습니다.
    console.log('Username:', username);
    console.log('Password:', password);
    // 예시로 콘솔에 출력합니다.
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>kakao</FormTitle>
        <FormField>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            placeholder="이름"
          />
          <Input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="비밀번호"
          />
          <LoginButton type="submit">로그인</LoginButton>
        </FormField>
      </LoginForm>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 580px;
  max-width: 580px;
`;

const FormTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-size: 40px;
`;

const FormField = styled.div`
  width: 100%;
  max-width: 580px;
  padding: 60px 52px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
`;

const Input = styled.input`
  padding: 10px 0px 8px;
  width: 100%;
  box-sizing: border-box;
  min-height: 42px;
  line-height: 1.5;
  border-width: 0px 0px 1px;
  border-color: rgb(204, 204, 204);
  color: rgb(51, 51, 51);
  font-weight: 400;
  font-size: 15px;
  gap: 16px;
`;

const LoginButton = styled.button`
  width: 100%;
  padding: 10px 0px 8px;
  background-color: rgb(254, 229, 0);
  color: rgb(17, 17, 17);
  margin-top: 40px;
  border: none;
  border-radius: 4px;
  height: 40px;
  cursor: pointer;
  font-size: 15px;

  &:hover {
    background-color: rgb(254, 215, 0);
  }
`;

export default LoginPage;
