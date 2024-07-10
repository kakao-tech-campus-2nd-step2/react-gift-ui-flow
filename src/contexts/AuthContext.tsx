import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AuthContextProps {
  isLoggedIn: boolean;
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    const storedUser = sessionStorage.getItem('username');
    if (token && storedUser) {
      setIsLoggedIn(true);
      setUser(storedUser);
    }
  }, []);

  const login = (username: string) => {
    setIsLoggedIn(true);
    setUser(username);
    sessionStorage.setItem('authToken', 'dummy_token');
    sessionStorage.setItem('username', username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
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
