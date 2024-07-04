import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../components/common/Button';
import { UnderlineTextField } from '../components/common/Form/Input/UnderlineTextField';

const LoginPageContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 580px;
  padding: 16px;
  & > h3 {
    font-size: 30px;
    padding-bottom: 40px;
    text-align: center;
  }
`;

const Box = styled.section`
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 50px;
`;

const ButtonContainer = styled.section`
  padding-top: 40px;
`;

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <LoginPageContainer>
      <LoginForm onSubmit={handleSubmit}>
        <h3>KaKao</h3>
        <Box>
          <UnderlineTextField
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="이름"
          />
          <UnderlineTextField
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
          <ButtonContainer>
            <Button type="submit">로그인</Button>
          </ButtonContainer>
        </Box>
      </LoginForm>
    </LoginPageContainer>
  );
}

export default LoginPage;
