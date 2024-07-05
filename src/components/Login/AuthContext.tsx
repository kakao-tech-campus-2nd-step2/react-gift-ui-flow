import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

type AuthContextProps = {
  user: string | null;
  login: (user: string) => void;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(sessionStorage.getItem('authToken'));

  const login = (id: string) => {
    setUser(id);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};
