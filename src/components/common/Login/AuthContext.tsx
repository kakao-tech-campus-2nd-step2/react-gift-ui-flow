import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isLogin: boolean;
  setIsLogin: (loggedIn: boolean) => void;
  login: (id: string) => void;
  logout: () => void;
  authToken: string | null;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [authToken, setAuthToken] = useState<string | null>(null);

  const login = (id: string) => {
    sessionStorage.setItem('authToken', id);
    setAuthToken(id);
    setIsLogin(true);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
    setIsLogin(false);
  };

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin, login, logout, authToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
