/* @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { Container } from '@/components/common/Layout/Container';

export default function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();
  const HandleLogin = () => {
    if (!id || !pw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    navigate('/');
  };
  return (
    <LoginWrapper>
      <Title>Kakao</Title>
      <Container justifyContent="center" alignItems="center" maxWidth="1024px">
        <FormWrapper>
          <UnderlineTextField
            placeholder="이름"
            value={id}
            variant="responsive"
            onChange={(e) => setId(e.target.value)}
          />
          <UnderlineTextField
            placeholder="비밀번호"
            type="password"
            value={pw}
            variant="responsive"
            onChange={(e) => setPw(e.target.value)}
          />
          <Button
            themetype="kakao"
            size="responsive"
            onClick={HandleLogin}
            css={css`
              width: 100%;
              margin-top: 40px;
            `}
          >
            로그인
          </Button>
        </FormWrapper>
      </Container>
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
  width: 56%;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 50px;
`;
