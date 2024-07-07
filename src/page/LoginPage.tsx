import styled from '@emotion/styled';
import React, { useState } from 'react';

import { useAuth } from '@/AuthContext';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username);
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <FormTitle>kakao</FormTitle>
        <FormField>
          <UnderlineTextField
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="이름"
          />
          <UnderlineTextField
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

  &:focus {
    outline: none;
  }
`;

export default LoginPage;
