import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  username: string;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const storedUser = sessionStorage.getItem('authToken');
    if (storedUser) {
      setIsLoggedIn(true);
      setUsername(storedUser);
    }
  }, []);

  const login = (name: string) => {
    setUsername(name);
    setIsLoggedIn(true);
    sessionStorage.setItem('authToken', name);
  };

  const logout = () => {
    setUsername('');
    setIsLoggedIn(false);
    sessionStorage.removeItem('authToken');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
