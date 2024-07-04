import styled from '@emotion/styled';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { UserInfo } from '@/providers/UserInfoProviders';

export const Login = () => {
  const [name, setName] = useState<string>('');
  const [pw, setPw] = useState<string>('');
  const navigate = useNavigate();
  const { setUserName } = useContext(UserInfo);

  const hanldeClick = () => {
    sessionStorage.setItem('authToken', name);
    setUserName(name);
    navigate(-1);
  };

  return (
    <Wrapper>
      <Logo
        src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
        alt="kakao"
      />
      <Container>
        <UnderlineTextField
          placeholder="이름"
          style={{ marginBottom: 20 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <UnderlineTextField
          type="password"
          placeholder="비밀번호"
          style={{ marginBottom: 50 }}
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <Button onClick={hanldeClick}>로그인</Button>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const Logo = styled.img`
  width: 88px;
`;
const Container = styled.div`
  // display: flex;
  // flex-direction: column;
  // gap: 40px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 60px 52px;
`;
