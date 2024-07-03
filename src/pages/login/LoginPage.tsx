import LoginSection from './components/LoginSection';
import * as styles from './styles';
import LoginLogo from '@/assets/login/Kakao_Login_Title.svg';

const LoginPage = () => {
  return (
    <styles.LoginLayout>
      <styles.LoginLogo src={LoginLogo} alt="카카오 CI" />
      <LoginSection />
    </styles.LoginLayout>
  );
};

export default LoginPage;
