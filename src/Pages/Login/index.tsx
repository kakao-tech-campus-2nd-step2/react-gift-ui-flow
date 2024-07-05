import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/AuthContext';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || '/'; // 이전 경로 또는 기본 경로

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert('아이디와 비밀번호를 입력하세요');
      return;
    }
    login(username);
    navigate(from, { replace: true }); // 로그인 후 이전 경로로 리디렉션
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
            <br/>
            <Button type="submit">로그인</Button>
          </Form>
        </FormWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
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
  width: 500px;
  height: 250px;
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