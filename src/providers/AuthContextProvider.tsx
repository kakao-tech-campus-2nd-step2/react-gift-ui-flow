import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

type AuthContextType = {
  authToken: string | null;
  login: (newAuthToken: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

type AuthProviderProps = {
  children: ReactNode;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Cannot find AuthContextProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(sessionStorage.getItem('authToken'));

  const login = (newAuthToken: string) => {
    sessionStorage.setItem('authToken', newAuthToken);
    setAuthToken(newAuthToken);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};
