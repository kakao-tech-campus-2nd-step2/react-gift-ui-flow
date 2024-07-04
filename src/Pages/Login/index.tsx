import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert('이름과 비밀번호를 입력하세요');
      return;
    }
    onLogin();
    navigate('/');
  };

  return (
    <Wrapper>
      <ContentWrapper>
        <Title>kakao</Title>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="이름"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">로그인</Button>
          </Form>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 32px;
  font-weight: bold;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  max-width: 700px;
  width: 100%;
  padding: 40px;
  border: 1px solid black;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #dee2e6;
  border-radius: 0;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #ffeb00;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;
