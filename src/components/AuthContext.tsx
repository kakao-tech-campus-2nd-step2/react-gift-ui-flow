import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuth: boolean;
  login: (userName: string) => void;
  logout: () => void;
}

const initAuthContext: AuthContextType = {
  isAuth: false,
  login: () => {},
  logout: () => {},
};

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>(initAuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setIsAuth(true);
      alert('현재 권한 : ' + token);
    }
  }, []);

  const login = (userName: string) => {
    sessionStorage.setItem('authToken', userName);
    setIsAuth(true);
    // alert('Login 걸친 결과 =' + isAuth + '(권한 획득)'); 비동기 실행이라 가끔 이전 상태 값(false)이 뜸
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
