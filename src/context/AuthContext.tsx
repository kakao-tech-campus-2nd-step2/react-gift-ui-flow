import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AuthContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
// AuthProvider 컴포넌트, useState를 이용해 authToken 상태관리
export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  const value = { authToken, setAuthToken };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// useAuth 훅, AuthContext를 사용하여 현재 인증 상태와 상태를 업뎃하는 함수를 반환
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
