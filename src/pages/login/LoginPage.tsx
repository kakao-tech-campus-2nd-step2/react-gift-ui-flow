import LoginLogo from './components/login-logo';
import LoginSection from './components/login-section';
import * as S from './styles';

const LoginPage = () => {
  return (
    <S.LoginLayout>
      <LoginLogo />
      <LoginSection />
    </S.LoginLayout>
  );
};

export default LoginPage;
