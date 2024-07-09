import { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from '@/routes/constants';
interface AuthContextType {
  authToken: string | null; //토큰
  isAuthenticated: boolean; //인증 유무
  loading: boolean; // 로딩 상태
  login: (id: string) => void;
  logout: () => void;
  username: string | null;
}
export const AuthContext = createContext<AuthContextType>({
  authToken: null,
  isAuthenticated: false,
  loading: true,
  login: () => {},
  logout: () => {},
  username: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
      setIsAuthenticated(true);
      setUsername(token);
    }
    setLoading(false);
  }, []);

  const login = (id: string) => {
    sessionStorage.setItem('authToken', id);
    setAuthToken(id);
    setIsAuthenticated(true);
    setUsername(id);
    navigate(ROUTE_PATH.PREVIOUS);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setIsAuthenticated(false);
    setAuthToken(null);
    setUsername(null);
    navigate(ROUTE_PATH.MAIN_PAGE);
  };

  return (
    <AuthContext.Provider value={{ authToken, isAuthenticated, login, logout, username, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
