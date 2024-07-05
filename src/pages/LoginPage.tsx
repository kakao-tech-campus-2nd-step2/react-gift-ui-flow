/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { useAuth } from '@/hooks/useAuth';

export default function LoginPage() {
  const [id, setId] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const sessionStorage = window.sessionStorage;
  const navigate = useNavigate();
  const { authToken, setAuthToken } = useAuth();

  if (authToken) {
    return <Navigate to="/" replace={true} />;
  }
  const HandleLogin = () => {
    if (!id || !pw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    sessionStorage.setItem('authToken', JSON.stringify({ id, pw }));
    setAuthToken({ id: id, pw: pw });
    navigate(-1);
  };
  return (
    <LoginWrapper>
      <Title>Kakao</Title>
      <FormWrapper>
        <UnderlineTextField placeholder="이름" value={id} onChange={(e) => setId(e.target.value)} />
        <UnderlineTextField placeholder="비밀번호" type="password" value={pw} onChange={(e) => setPw(e.target.value)} />
        <Button
          themetype="kakao"
          onClick={HandleLogin}
          css={css`
            margin-top: 40px;
          `}
        >
          로그인
        </Button>
      </FormWrapper>
    </LoginWrapper>
  );
}
const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.p`
  font-size: 32px;
  padding-bottom: 50px;
`;
const FormWrapper = styled.form`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  @media screen and (min-width: 768px) {
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 50px;
  }
`;
