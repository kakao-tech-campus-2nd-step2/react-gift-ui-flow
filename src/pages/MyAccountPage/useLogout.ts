import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/useAuth';

export const useLogout= () => {
  const { authToken, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authToken) {
      navigate('/login'); 
    }
  }, [authToken, navigate]);

  const handleLogout = () => {
    logout();
    alert('로그아웃 처리');
    navigate('/'); 
  };

  return handleLogout;
};
