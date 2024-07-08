import type { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTE_PATH } from '@/routes/constants';

export const useAuth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const auth = sessionStorage.getItem('authToken');
    setIsLogin(auth !== null);
  }, []);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('authToken', username);
    setIsLogin(true);
    navigate(ROUTE_PATH.PREVIOUS);
  };

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLogin) {
      sessionStorage.removeItem('authToken');
      setIsLogin(false);
      navigate(ROUTE_PATH.MAIN_PAGE);
    }
  };
  return {
    username,
    password,
    handleUsernameChange,
    handlePasswordChange,
    handleLogin,
    handleLogout,
    isLogin,
  };
};
