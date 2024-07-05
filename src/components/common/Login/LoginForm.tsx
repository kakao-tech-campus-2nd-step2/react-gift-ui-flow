import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '../Button';
import { UnderlineTextField } from '../Form/Input/UnderlineTextField';
import { useAuth } from './AuthContext';

const LoginContainer = styled.section`
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 60px 52px;
  width: 80%;
  maxwidth: 475px;
  box-sizing: border-box;
`;

const ButtonContainer = styled.section`
  padding-top: 40px;
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const { login, authToken } = useAuth();

  const [id, setId] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (authToken) {
      navigate('/');
    }
  }, [authToken, navigate]);

  const onClickId = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  }, []);

  const onClickPassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const handleLogin = () => {
    if (id && password) {
      login(id);
      navigate(-1);
    } else {
      alert('id와 password를 입력해주세요!');
    }
  };

  return (
    <LoginContainer>
      <UnderlineTextField
        type="text"
        id="username"
        value={id}
        onChange={onClickId}
        placeholder="이름"
      />
      <div style={{ height: '16px' }} />
      <UnderlineTextField
        type="text"
        id="password"
        value={password}
        onChange={onClickPassword}
        placeholder="비밀번호"
      />
      <div style={{ height: '16px' }} />
      <ButtonContainer>
        <Button type="submit" onClick={handleLogin}>
          로그인
        </Button>
      </ButtonContainer>
    </LoginContainer>
  );
};

export default LoginForm;
