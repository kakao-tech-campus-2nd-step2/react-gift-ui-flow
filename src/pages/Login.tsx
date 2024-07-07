import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { useAuth } from '@/context/AuthContext';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #fff;
  border: 1px solid #e7e7e7;
  border-radius: 8px;
  width: 30%;
`;

const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  color: #333;
`;

const InputField = styled(UnderlineTextField)`
  margin-bottom: 20px;
`;

const LoginForm: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id && password) {
      login(id);
      navigate(-1);
    } else {
      alert('아이디와 비밀번호를 입력해주세요.');
    }
  };

  return (
    <LoginContainer>
      <Title>kakao</Title>
      <Form onSubmit={handleSubmit}>
        <InputField
          type="text"
          placeholder="이름"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <InputField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">로그인</Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
