// src/hooks/custom-hooks/useLogin.ts
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '@/contexts/AuthContext';

const useLogin = () => {
  const [name, setName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (name.length === 0 || password.length === 0) {
      alert('아이디와 비밀번호를 입력해주세요.');
    } else {
      login(name);
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  };

  return {
    name,
    password,
    handleNameChange,
    handlePasswordChange,
    handleLoginClick,
  };
};

export default useLogin;
