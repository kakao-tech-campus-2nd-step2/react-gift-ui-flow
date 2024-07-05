import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button/index';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { useAuth } from '@/providers/AuthContextProvider';
import { ROUTE_PATHS } from '@/routes/constants';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginSection = styled.section`
  width: 100%;
  max-width: 580px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 60px 52px;
`;

const LoginButton = styled(Button)`
  max-width: 474px;
  width: 100%;
`;

const InputField = styled(UnderlineTextField)`
  max-width: 474px;
  width: 100%;
  margin: 8px 0;
`;

const LogoImage = styled.img`
  margin-bottom: 16px;
`;

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !password) {
      alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      login(id);
      navigate(ROUTE_PATHS.MAIN);
    }
  };

  return (
    <Wrapper>
      <LogoImage
        src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
        width="88px"
        alt="카카오 CI"
      />
      <LoginSection>
        <form onSubmit={handleLogin}>
          <InputField
            type="id"
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
          <LoginButton type="submit">로그인</LoginButton>
        </form>
      </LoginSection>
    </Wrapper>
  );
};

export default LoginPage;
