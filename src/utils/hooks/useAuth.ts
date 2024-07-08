import type { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    navigate(-1);
  };

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLogin) {
      sessionStorage.removeItem('authToken');
      setIsLogin(false);
      navigate('/');
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
