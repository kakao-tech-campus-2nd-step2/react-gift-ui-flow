import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  // context 가 존재하지 않는 경우 에러를 발생시켜,
  // useAuth 훅이 AuthProvider 내에서 사용되지 않을 경우를 방지함.

  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(sessionStorage.getItem('authToken'));
  const isAuthenticated = !!authToken;

  //로그인 함수
  const login = (username: string) => {
    sessionStorage.setItem('authToken', username);
    setAuthToken(username);
  };

  //로그아웃 함수
  const logout = () => {
    sessionStorage.removeItem('authToken');
    setAuthToken(null);
  };

  const authContextValue: AuthContextType = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
