import { createContext, useEffect,useState } from 'react';

interface AuthContextType {
  authToken: string | null; //토큰
  isAuthenticated: boolean; //인증 유무
}
export const AuthContext = createContext<AuthContextType>({
  authToken: null,
  isAuthenticated: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ authToken, isAuthenticated: !!authToken }}>
      {children}
    </AuthContext.Provider>
  );
};
