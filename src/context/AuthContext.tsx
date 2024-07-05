import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface AuthContextType {
  userInfo: string;
  setUserInfo: React.Dispatch<React.SetStateAction<string>>;
  isLogin: boolean;
}

export const authContext = createContext<AuthContextType>({
  userInfo: '',
  setUserInfo: () => {},
  isLogin: false,
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    const userToken = token ? JSON.parse(token) : '';
    setIsLogin(!!userToken);

    if (userToken) {
      setUserInfo(userToken);
    }
  }, [location]);

  return (
    <authContext.Provider value={{ userInfo, setUserInfo, isLogin }}>
      {children}
    </authContext.Provider>
  );
};
