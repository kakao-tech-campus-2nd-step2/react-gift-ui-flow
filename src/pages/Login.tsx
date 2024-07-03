import logo from '@/assets/login-logo.svg';

import { LoginForm } from '@/components/LoginPage/LoginForm';
import { LoginLayout } from '@/components/LoginPage/LoginLayout';

export const LoginPage = () => {
  return (
    <LoginLayout>
      <img src={logo} width="86" alt="카카오 로그인 로고" />
      <LoginForm />
    </LoginLayout>
  );
};
