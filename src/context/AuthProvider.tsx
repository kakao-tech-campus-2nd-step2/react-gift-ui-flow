import React, { useEffect, useState } from 'react';

import { AuthContext } from '@/context/AuthContext';
import type { AuthProviderProps } from '@/context/types';

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(sessionStorage.getItem('authToken'));

  const login = (token: string) => {
    setAuthToken(token);
    sessionStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuthToken(null);
    sessionStorage.removeItem('authToken');
  };

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};
