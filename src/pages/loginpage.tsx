import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/common/Button';
import { UnderlineTextField } from '../components/common/Form/Input/UnderlineTextField';
import { useAuth } from '../contexts/AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    login(username);
    navigate('/');
  };

  return (
    <Container>
      <Logo src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg" alt="카카오 로고" />
      <LoginForm>
        <InputWrapper>
          <UnderlineTextField 
            placeholder="이름" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
          <Spacer />
          <UnderlineTextField 
            type="password" 
            placeholder="비밀번호" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        <SpacerLarge />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </InputWrapper>
      </LoginForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const Logo = styled.img`
  width: 88px;
  height: 88px;
  margin-bottom: 10px;
`;

const LoginForm = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 474px;
  max-width: 100%;
`;

const InputWrapper = styled.div`
  width: 100%;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

const Spacer = styled.div`
  height: 20px;
`;

const SpacerLarge = styled.div`
  height: 40px;
`;

const LoginButton = styled(Button)`
  width: 100%;
  max-width: 474px;
  height: 40px;
  background-color: #fee500;
  color: #000;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`;

export default LoginPage;
