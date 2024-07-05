import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/useAuth';

export function useHandleLogin(id: string) {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(id);
    alert('로그인 처리');
    navigate(-1); 
  };

  return handleLogin;
}
