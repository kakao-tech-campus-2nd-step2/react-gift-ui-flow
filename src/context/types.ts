import type { ReactNode } from 'react';

export interface AuthContextProps {
  authToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
