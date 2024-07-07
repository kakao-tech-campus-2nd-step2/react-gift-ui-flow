import type { ChangeEvent, FormEvent, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const auth = sessionStorage.getItem('auth');
    setIsLogin(auth !== null);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'username') {
      setUsername(value);
    }
    if (name === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('auth', username);
    setIsLogin(true);
    navigate('/');
  };

  const handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isLogin) {
      sessionStorage.removeItem('auth');
      setIsLogin(false);
      navigate('/');
    }
  };
  return {
    username,
    password,
    handleInputChange,
    handleLogin,
    handleLogout,
    isLogin,
  };
};
