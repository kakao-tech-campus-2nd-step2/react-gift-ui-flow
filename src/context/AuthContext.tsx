import type { ReactNode } from 'react';
import React, { createContext, useState } from 'react';

type AuthContextType = {
  authToken: string | null;
  login: (id: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  authToken: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(sessionStorage.getItem('authToken'));

  const login = (id: string) => {
    sessionStorage.setItem('authToken', id);
    setAuthToken(id);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};
