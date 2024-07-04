import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  isAuth: boolean;
  login: (userName: string) => void;
  logout: (userName: string) => void;
}

const initAuthContext: AuthContextType = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};

interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthContext = createContext<AuthContextType>(initAuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
    }
  }, []);

  const login = (userName: string) => {
    sessionStorage.setItem('authToken', userName);
    setIsAuth(true);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setIsAuth(false);
  };

  return <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
