import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '@/AuthContext';
import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Image } from '@/components/common/Image';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = (location.state as { from: string })?.from || '/';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username && !password) {
      alert('아이디와 비밀번호를 입력하세요');
      return;
    }

    if (!username) {
      alert('아이디를 입력하세요');
      return;
    }

    if (!password) {
      alert('비밀번호를 입력하세요');
      return;
    }

    login(username);
    sessionStorage.setItem('authToken', username); // Store ID in sessionStorage
    navigate(from);
  };

  return (
    <LoginContainer>
      <Image
        src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
        alt="Kakao Logo"
        width={50}
        height={50}
      />
      <LoginForm onSubmit={handleSubmit}>
        <UnderlineTextField
          type="text"
          placeholder="이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <UnderlineTextField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton theme="kakao" size="responsive" type="submit">
          로그인
        </LoginButton>
      </LoginForm>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80vh;
  justify-content: center;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const LoginButton = styled(Button)`
  margin-top: 20px;
`;

export default LoginPage;
