import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

const AUTH_TOKEN_KEY = 'authToken';

interface AuthContextType {
  authToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(sessionStorage.getItem(AUTH_TOKEN_KEY));

  const login = (token: string) => {
    sessionStorage.setItem(AUTH_TOKEN_KEY, token);
    setAuthToken(token);
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
