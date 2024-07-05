import loginLogo from '@/assets/login-logo.svg';
import LoginLayout from '@/layouts/LoginLayout';

import { Logo } from '@/components/Logo';

import { LoginForm } from './components/LoginForm';

export const LoginPage = () => {
  return (
    <LoginLayout>
      <Logo src={loginLogo} alt="카카오 로그인 로고" width="86" />
      <LoginForm />
    </LoginLayout>
  );
};
