import type { ReactNode} from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  user: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
      setUser(token);
    }
  }, []);

  const login = (username: string) => {
    sessionStorage.setItem('authToken', username);
    setIsLoggedIn(true);
    setUser(username);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
