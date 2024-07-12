import { useAuth } from '@context/auth/useAuth';
import { ROUTE_PATH } from '@routes/path';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UserInfoState {
  userName: string;
  userPassword: string;
}

export default function useLoginForm() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [userInfo, setUserInfo] = useState<UserInfoState>({
    userName: '',
    userPassword: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogin = () => {
    if (userInfo.userName !== '' && userInfo.userPassword !== '') {
      login(userInfo.userName);
      navigate(ROUTE_PATH.PREV);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleLogin();
  };

  return {
    userInfo,
    handleChange,
    handleSubmit,
  };
}
