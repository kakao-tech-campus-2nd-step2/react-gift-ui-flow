import { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  state: string;
  handleUser: (user: string) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState(() => {
    const storedUser = sessionStorage.getItem('authToken');
    return storedUser ? 'login' : 'logout';
  });

  useEffect(() => {
    const handleStorageChange = () => {
      const storedUser = sessionStorage.getItem('authToken');
      if (storedUser) {
        setState('login');
      } else {
        setState('logout');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    // session storage나 local storage 바뀔때 마다 함수 실행
  }, []);

  const handleUser = (user: string) => {
    setState(user);
  };

  return <AuthContext.Provider value={{ state, handleUser }}>{children}</AuthContext.Provider>;
};

export const useUserInfo = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useUserInfo must be used within an AuthProvider');
  }
  return context;
};
