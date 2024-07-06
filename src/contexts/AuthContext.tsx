import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useState } from 'react';

export type Auth = {
  name: string | undefined;
};

export const defaultAuthValue = {
  name: undefined,
};

function readSession(): Auth {
  const authToken = sessionStorage.getItem('authToken');
  if (authToken) {
    return JSON.parse(authToken);
  }
  return defaultAuthValue;
}

export const AuthContext = createContext<Auth>(readSession());
export const SetAuthContext = createContext<Dispatch<SetStateAction<Auth>> | null>(null);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth>(readSession());

  return (
    <SetAuthContext.Provider value={setAuth}>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </SetAuthContext.Provider>
  );
};
