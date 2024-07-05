import styled from '@emotion/styled';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Container } from '@/components/common/layouts/Container/index';
import { useAuth } from '@/contexts/AuthContext';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const from = location.state?.from?.pathname || '/';

  const handleLogin = () => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    login(id);
    navigate(from);
  };

  return (
    <LoginSection>
      <h1>kakao</h1>
      <FormContainer>
        <LoginField
          placeholder="이름"
          value={id}
          onChange={(e) => setId(e.target.value)}
        ></LoginField>
        <LoginField
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></LoginField>
        <LoginButton theme="kakao" size="small" onClick={handleLogin}>
          로그인
        </LoginButton>
      </FormContainer>
    </LoginSection>
  );
};

const LoginSection = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  & > h1 {
    font-size: 36px;
  }
`;

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 475px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 60px 52px;
`;

const LoginField = styled(UnderlineTextField)`
  margin: 10px 0;
`;

const LoginButton = styled(Button)`
  padding: 10px 0;
  width: 100%;
  font-size: 16px;
  margin-top: 50px;
`;
