import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const storedUserName = sessionStorage.getItem('authToken');
  const navigate = useNavigate();

  const logout = useCallback(() => {
    sessionStorage.clear();
    navigate('/');
  }, [navigate]);

  const login = useCallback(
    (username: string) => {
      sessionStorage.setItem('authToken', username);
      navigate('/');
    },
    [navigate]
  );

  return { storedUserName, login, logout };
};
