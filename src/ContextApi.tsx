import React, { createContext, useContext, useEffect,useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  username: string;
  login: (username: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // 컴포넌트가 화면에 나타날 때 (마운트될 때) 실행
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    const storedUsername = localStorage.getItem('username');
    if (token && storedUsername) {
      setIsLoggedIn(true); // 토큰과 사용자 이름이 존재하므로 로그인 상태
      setUsername(storedUsername);
    }
  }, []);

  const login = (newUsername: string) => {
    sessionStorage.setItem('authToken', newUsername);
    localStorage.setItem('username', newUsername);
    setIsLoggedIn(true);
    setUsername(newUsername);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setUsername('');
  };

  return ( // 자식 컴포넌트에 로그인 상태와 함수들 전달
    <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// hook
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
