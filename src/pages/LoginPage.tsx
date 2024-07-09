import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(username);
    navigate(-1);
  };

  return (
    <Container>
      <LoginForm onSubmit={handleLogin}>
        <Title>kakao</Title>
        <InputField
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit">로그인</LoginButton>
      </LoginForm>
    </Container>
  );
};

export default LoginPage;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const InputField = styled.input`
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const LoginButton = styled.button`
  padding: 12px;
  margin-top: 10px;
  background-color: #ffeb3b;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
`;
