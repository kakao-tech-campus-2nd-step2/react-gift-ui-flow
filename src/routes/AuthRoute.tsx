import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuthContext } from '@/utils/hooks/useAuthContext';

interface Props {
  children: React.ReactNode;
}

export const AuthRoute: React.FC<Props> = ({ children }) => {
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
