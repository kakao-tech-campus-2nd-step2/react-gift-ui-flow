import type { ReactNode} from 'react';
import React, { createContext, useContext, useEffect,useState } from 'react';

const AUTH_TOKEN_KEY = 'authToken';

interface AuthContextType {
  isLoggedIn: boolean;
  user: string | null;
  setAuthToken: (username: string) => void;
  clearAuthToken: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem(AUTH_TOKEN_KEY);
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const setAuthToken = (username: string) => {
    setIsLoggedIn(true);
    sessionStorage.setItem(AUTH_TOKEN_KEY, username);
    setUser(username);
  };

  const clearAuthToken = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn , user, setAuthToken, clearAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
