import { createContext, useState, ReactNode, useContext, useMemo } from 'react';

interface LoginContextProps {
  isLoggedIn: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
  setRedirectPath: (path: string) => void;
  redirectPath: string;
}

const LoginContext = createContext<LoginContextProps | undefined>(undefined);

interface LoginProviderProps {
  children: ReactNode;
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const saved = sessionStorage.getItem('isLoggedIn');
    return saved === 'true';
  });
  const [username, setUsername] = useState(() => {
    return sessionStorage.getItem('username') || '';
  });
  const [redirectPath, setRedirectPath] = useState(() => {
    return sessionStorage.getItem('redirectPath') || '/';
  });

  const login = (username: string) => {
    setIsLoggedIn(true);
    setUsername(username);
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('username', username);
    sessionStorage.setItem('authToken', username);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUsername('');
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('authToken');
  };

  const setRedirectPathHandler = (path: string) => {
    setRedirectPath(path);
    sessionStorage.setItem('redirectPath', path);
  };

  const value = useMemo(
    () => ({ isLoggedIn, username, login, logout, setRedirectPath: setRedirectPathHandler, redirectPath }),
    [isLoggedIn, username, redirectPath]
  );

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