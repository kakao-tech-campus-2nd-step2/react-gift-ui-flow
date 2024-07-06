import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  authToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');

    if (token) {
      setAuthToken(token);
    }
  }, []);

  const login = (token: string) => {
    sessionStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth는 AuthProvider와 함께 사용되어야함');
  }
  return context;
};
