import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';

const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!id || !password) {
      alert('ID와 PW를 입력하세요');
      return;
    }

    sessionStorage.setItem('authToken', id);
    setAuthToken(id);
    navigate('/');
  };

  return (
    <Wrapper>
      <LoginContainer>
        <Title>Kakao</Title>
        <UnderlineTextField
          placeholder="이름"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <UnderlineTextField
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton onClick={handleLogin}>로그인</LoginButton>
      </LoginContainer>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FFFFFF;
`;

const LoginContainer = styled.div`
  background-color: #ffffff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 300px;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const LoginButton = styled(Button)`
  background-color: #ffdd00;
  color: black;
  margin-top: 20px;
  width: 100%;
`;
