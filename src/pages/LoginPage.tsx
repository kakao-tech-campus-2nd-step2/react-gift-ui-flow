import styled from '@emotion/styled';

import { AuthProvider } from '../components/common/Login/AuthContext';
import LoginForm from '../components/common/Login/LoginForm';

const LoginPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginTitle = styled.img`
  width: 88px;
`;

function LoginPage() {
  return (
    <LoginPageContainer>
      <LoginTitle
        src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg"
        alt="kakao"
      />
      <AuthProvider>
        <LoginForm />
      </AuthProvider>
    </LoginPageContainer>
  );
}

export default LoginPage;
