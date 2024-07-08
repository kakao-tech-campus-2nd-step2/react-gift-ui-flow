import { useNavigate } from 'react-router-dom';

import ROUTES from '@/constants/routes';
import { useAuth } from '@/context/auth/useAuth';

export const useLogout = () => {
  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.HOME);
  };

  return { handleLogout };
};
