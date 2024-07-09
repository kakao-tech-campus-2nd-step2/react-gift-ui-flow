import React, { ReactNode, useEffect, useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSessionStorage } from '@hooks/useSessionStorage';
import { ROUTE_PATH } from '@routes/path';
import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [authToken, setAuthToken] = useSessionStorage('authToken', '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  const login = useCallback(
    (userName: string) => {
      setAuthToken(userName);
    },
    [setAuthToken],
  );

  const logout = useCallback(() => {
    setAuthToken('');
    navigate(ROUTE_PATH.HOME);
  }, [setAuthToken, navigate]);

  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      logout,
    }),
    [isAuthenticated, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
