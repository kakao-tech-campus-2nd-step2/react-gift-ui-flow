import styled from '@emotion/styled';
import React, { useContext,useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '@/context/AuthContext';

export const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logged in with ID:', id, 'and Password:', password);
    login(id);
    navigate(-1);
  };

  return (
    <LoginContainer>
      <LoginForm onSubmit={handleLogin}>
        <Title>kakao</Title>
        <Input
          type="text"
          placeholder="이름"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <LoginButton type="submit">로그인</LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
`;

const Input = styled.input``;

const LoginButton = styled.button`
  cursor: pointer;
`;
