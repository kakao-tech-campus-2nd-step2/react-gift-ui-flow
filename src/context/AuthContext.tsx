import type { ReactNode } from 'react';
import { createContext, useContext, useSyncExternalStore } from 'react';

const AUTH_TOKEN_KEY = 'authToken';

interface AuthContextType {
  authToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const useAuthToken = () => {
  const subscribe = (callback: () => void) => {
    window.addEventListener('storage', callback);
    return () => window.removeEventListener('storage', callback);
  };

  const getSnapshot = () => sessionStorage.getItem(AUTH_TOKEN_KEY);

  return useSyncExternalStore(subscribe, getSnapshot);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const authToken = useAuthToken();

  const login = (token: string) => {
    sessionStorage.setItem(AUTH_TOKEN_KEY, token);
    window.dispatchEvent(new Event('storage'));
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <AuthContext.Provider value={{ authToken, login, logout }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
