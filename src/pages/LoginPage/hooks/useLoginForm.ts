import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/auth/useAuth';

export const useLoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const isLoginEnabled = !!username.trim() && !!password;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'username') setUsername(value);
    if (name === 'password') setPassword(value);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();

    if (!isLoginEnabled) {
      /* eslint-disable no-alert */
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }
    login(username);
    navigate(-1);
  };

  return {
    username,
    password,
    handleInputChange,
    handleLogin,
  };
};
