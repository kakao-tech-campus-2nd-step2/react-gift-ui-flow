import {
  createContext, ReactNode, useEffect, useMemo, useState,
} from 'react';
import { STORAGE_AUTH_TOKEN_KEY } from '@/constants';

interface LoginStatus {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  username: string;
  setUsername: (username: string) => void;
}

const defaultLoginStatus: LoginStatus = {
  isLoggedIn: false,
  setIsLoggedIn: () => {},
  username: '',
  setUsername: () => {},
};

export const LoginContext = createContext<LoginStatus>(defaultLoginStatus);

function LoginContextProvider({ children }: { children: ReactNode }) {
  const storedUsername = sessionStorage.getItem(STORAGE_AUTH_TOKEN_KEY);

  const [isLoggedIn, setIsLoggedIn] = useState(storedUsername !== null);
  const [username, setUsername] = useState(storedUsername || '');

  useEffect(() => {
    if (isLoggedIn) sessionStorage.setItem(STORAGE_AUTH_TOKEN_KEY, username);
  }, [username, isLoggedIn]);

  useEffect(() => {
    if (!isLoggedIn) sessionStorage.removeItem(STORAGE_AUTH_TOKEN_KEY);
  }, [isLoggedIn]);

  // 사실 안 감싸도 똑같은데 eslint 에러가 나서 감쌌다
  const loginStatus: LoginStatus = useMemo<LoginStatus>(() => ({
    isLoggedIn, setIsLoggedIn, username, setUsername,
  }), [isLoggedIn, username]);

  return (
    <LoginContext.Provider value={loginStatus}>
      {children}
    </LoginContext.Provider>
  );
}

export default LoginContextProvider;
