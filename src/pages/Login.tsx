import styled from '@emotion/styled';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import KAKAO_LOGO from '@/assets/kakao_logo.svg';
import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';

export const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [queryParams] = useSearchParams();

  const handleConfirm = () => {
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    // id를 세션 스토리지에 저장
    sessionStorage.setItem('authToken', id);

    // origin URL(홈)로 리다이렉트
    const redirectUrl = queryParams.get('redirect') ?? `${window.location.origin}/`;
    return window.location.replace(redirectUrl);
  };

  return (
    <Wrapper>
      <Logo src={KAKAO_LOGO} alt="Kakao Logo" />
      <FormWrapper>
        <UnderlineTextField placeholder="이름" value={id} onChange={(e) => setId(e.target.value)} />
        <div
          style={{
            width: '100%',
            backgroundColor: 'inherit',
            height: '16px',
          }}
        />
        <UnderlineTextField
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div style={{ height: '40px', width: '100%', backgroundColor: 'inherit' }} />
        <Button onClick={handleConfirm}>로그인</Button>
      </FormWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 88px;
  color: #333;
`;

const FormWrapper = styled.article`
  width: 100%;
  max-width: 580px;
  padding: 16px;
`;
