import { createContext, useState, ReactNode, useContext, useMemo } from 'react';

interface LoginContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  const value = useMemo(() => ({ isLoggedIn, login, logout }), [isLoggedIn]);

  return (
    <LoginContext.Provider value={value}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error('useLogin은 LoginProvider 내에서 사용해야 합니다.');
  }
  return context;
};