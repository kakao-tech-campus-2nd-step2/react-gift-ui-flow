import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const userName = sessionStorage.getItem('authToken');
  const navigate = useNavigate();

  const logout = useCallback(() => {
    sessionStorage.clear();
    navigate('/');
  }, [navigate]);

  return { userName, logout };
};
