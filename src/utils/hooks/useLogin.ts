import type { ChangeEvent, FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useLogin = () => {
  const navigate = useNavigate();

  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setIsLogin(username !== '' && password !== '');
  }, [username, password]);

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
    if (!isLogin) {
      alert('올바른 아이디와 패스워드를 입력해주세요.');
      return;
    }

    sessionStorage.setItem('auth', username);
    navigate('/');
  };
  return {
    username,
    password,
    handleInputChange,
    handleLogin,
  };
};
