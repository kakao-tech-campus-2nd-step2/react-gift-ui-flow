import React, { ReactNode, useEffect, useState, useMemo, useCallback } from 'react';
import { useSessionStorage } from '@hooks/useSessionStorage';
import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [authToken, setAuthToken] = useSessionStorage('authToken', '');
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  const login = useCallback(
    (token: string) => {
      setAuthToken(token);
    },
    [setAuthToken],
  );

  const logout = useCallback(() => {
    setAuthToken('');
  }, [setAuthToken]);

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
