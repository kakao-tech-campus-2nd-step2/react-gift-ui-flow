import type { ReactNode } from 'react';
import React, { createContext, useContext, useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = sessionStorage.getItem('authToken');
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);

  const login = (user: string) => {
    setCurrentUser(user);
    sessionStorage.setItem('authToken', user);
  };

  const logout = () => {
    setCurrentUser(null);
    sessionStorage.removeItem('authToken');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user: currentUser, login, logout }}>
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
