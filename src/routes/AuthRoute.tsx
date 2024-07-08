import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/utils/hooks/useAuthContext';

interface Props {
  children: ReactNode;
}

export const AuthRoute = ({ children }: Props) => {
  const { isAuthenticated, loading } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate, loading]);

  return <>{children}</>;
};
