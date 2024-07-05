import { ROUTE_PATH } from '@/routes/constants';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '@hooks/useSessionStorage';

interface UserInfoState {
  userName: string;
  userPassword: string;
}

export default function useLoginForm() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<UserInfoState>({
    userName: '',
    userPassword: '',
  });
  const [, setAuthToken] = useSessionStorage('authToken', '');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleLogin = () => {
    if (userInfo.userName !== '' && userInfo.userPassword !== '') {
      setAuthToken(userInfo.userName);
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
