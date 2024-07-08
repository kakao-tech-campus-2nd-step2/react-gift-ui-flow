import React, { useState, ReactNode } from 'react';

import { AuthContext } from './AuthContext';

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(() =>
    sessionStorage.getItem('authToken'),
  );

  const login = (token: string) => {
    setAuthToken(token);
    sessionStorage.setItem('authToken', token);
  };

  const logout = () => {
    setAuthToken(null);
    sessionStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};
