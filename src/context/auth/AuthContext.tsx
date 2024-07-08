import { createContext } from 'react';

export type AuthContextType = {
  user: string | undefined;
  isLoggedIn: boolean;
  logout: () => void;
  login: (username: string) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
