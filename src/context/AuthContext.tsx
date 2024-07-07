import React, { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  userId: string | null;
  login: (id: string) => void;
  logout: () => void;
  isInitialized: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      setUserId(token);
    }
    setIsInitialized(true);
  }, []);

  const login = (id: string) => {
    setIsLoggedIn(true);
    setUserId(id);
    sessionStorage.setItem('authToken', id);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserId(null);
    sessionStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, userId, login, logout, isInitialized }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};
