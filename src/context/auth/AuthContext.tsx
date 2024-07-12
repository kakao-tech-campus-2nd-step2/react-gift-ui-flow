import { createContext } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (userName: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export default AuthContext;
