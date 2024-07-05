import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/auth/useAuth';

export const useLogout = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(-1);
  };

  return { handleLogout };
};
