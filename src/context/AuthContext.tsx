import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
  authToken: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  checkAuthToken: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    checkAuthToken();
  }, []);

  const checkAuthToken = () => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
    } else {
      setAuthToken(null);
      setIsAuthenticated(false);
    }
  };

  const login = (token: string) => {
    sessionStorage.setItem('authToken', token);
    setAuthToken(token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authToken, isAuthenticated, login, logout, checkAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
