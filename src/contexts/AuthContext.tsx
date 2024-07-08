import { createContext, useState, useEffect, type ReactNode } from 'react';

export interface AuthContextType {
  authToken: string | null;
  setAuthToken: (token: string | null) => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
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

