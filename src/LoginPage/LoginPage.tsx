import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button/index'; // Import Button component
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';

interface LoginPageProps {
  onLogin: (username: string) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #fff;
`;

const Form = styled.form`
  background-color: #fff;
  padding: 80px 50px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 30px;
`;

const LoginButton = styled(Button)`
  margin-top: 50px;
`;

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    sessionStorage.setItem('authToken', id);
    onLogin(id);
    navigate('/');
  };

  return (
    <Container>
      <h1>kakao</h1>
      <Form>      
        <UnderlineTextField
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          label="이름"
        />
        <UnderlineTextField
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="비밀번호"
        />
        <LoginButton onClick={handleLogin} theme="kakao" >
          로그인
        </LoginButton>
      </Form>
    </Container>
  );
};

export default LoginPage;