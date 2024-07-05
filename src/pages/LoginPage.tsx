import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/App-core/AuthContext';
import { Button } from '@/components/common/Button/index';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username && password) {
      login(username); // 로그인 상태 변경
      const redirectPath = sessionStorage.getItem('redirectPath') || '/';
      console.log('Login successful. Redirecting to:', redirectPath);
      navigate(redirectPath, { replace: true });
    } else {
      alert('ID와 비밀번호를 입력해주세요.');
    }
  };

  return (
    <PageWrapper>
      <Logo>kakao</Logo>
      <LoginForm>
        <InputWrapper>
          <UnderlineTextField
            type="text"
            placeholder="이름"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputWrapper>
        <InputWrapper>
          <UnderlineTextField
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button theme="kakao" size="large" onClick={handleLogin}>
            로그인
          </Button>
        </ButtonWrapper>
      </LoginForm>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Logo = styled.h1`
  font-size: 40px;
  margin-bottom: 30px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  border: 1px solid #d3d3d3;
  width: 500px;
`;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export default LoginPage;
