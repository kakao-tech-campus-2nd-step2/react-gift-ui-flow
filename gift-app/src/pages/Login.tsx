import Input from '@components/Input/Input';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../hooks/LoginContext';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { login, redirectPath } = useLogin();
  const navigate = useNavigate();

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    if (id && password) {
      login(id);
      navigate(redirectPath);
    }
  };

  return (
    <LoginContainer>
      <Title>kakao</Title>
      <form onSubmit={handleLogin}>
        <StyledInput
          type="text"
          placeholder="이름"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <StyledInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <LoginButton type="submit">로그인</LoginButton>
      </form>
    </LoginContainer>
  );
};

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 140px 40px;
  border-radius: 10px;

  max-width: 400px;
  margin: 100px auto;
`;

const Title = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 20px;
`;

const LoginButton = styled.button`
  padding: 15px;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #ffeb3b;
  color: #000;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #fdd835;
  }
`;

export default LoginPage;