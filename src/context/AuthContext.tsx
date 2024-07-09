import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  loginId: string;
  login: (id: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!sessionStorage.getItem('authToken'));
  const [loginId, setLoginId] = useState<string>(sessionStorage.getItem('authToken') || '');

  const login = (id: string) => {
    setIsLoggedIn(true);
    setLoginId(id);
    sessionStorage.setItem('authToken', id);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setLoginId('');
    sessionStorage.removeItem('authToken');
  };

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      setLoginId(token);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
