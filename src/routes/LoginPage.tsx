import { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { UnderlineTextField } from '../components/common/Form/Input/UnderlineTextField';
import { Button } from '../components/common/Button';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!name || !password) {
      alert('아이디와 비밀번호를 입력해주세요');
      return;
    }

    sessionStorage.setItem('authToken', name);

    navigate('/');
  };

  return (
    <LoginContainer>
      <LoginInnerBox>
        <img
          src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
          alt="카카오 CI"
        />
        <LoginInputBox>
          <StyledUnderlineTextField
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Spacer height="10px" />
          <StyledUnderlineTextField
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacer height="50px" />
          <Button theme="kakao" onClick={handleLogin}>
            로그인
          </Button>
        </LoginInputBox>
      </LoginInnerBox>
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginInnerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 88px;
  }
`;

const LoginInputBox = styled.article`
  width: 450px;
  padding: 60px 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 8.12);
`;

const Spacer = styled.div<{ height: string }>`
  height: ${({ height }) => height};
`;

const StyledUnderlineTextField = styled(UnderlineTextField)`
  padding: 10px 8px;
`;
