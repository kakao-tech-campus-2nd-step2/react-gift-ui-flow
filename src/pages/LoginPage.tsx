import styled from '@emotion/styled';

import logo from '@/assets/images/kakao_logo.svg';
import LoginForm from '@/components/Auth/Login/LoginForm';
const LoginPage = () => (
  <Wrapper>
    <LogoImage src={logo} alt="카카오 로고 이미지" className="logo" />
    <LoginForm />
  </Wrapper>
);

export default LoginPage;

const Wrapper = styled.div({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

const LogoImage = styled.img({
  width: '88px',
  color: 'rgb(51, 51, 51)',
});
