import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useState } from 'react';

const defaultAuthValue = {
  name: undefined,
};

export const AuthContext = createContext<Auth>(defaultAuthValue);
export const SetAuthContext = createContext<Dispatch<SetStateAction<Auth>> | null>(null);

export type Auth = {
  name: string | undefined;
};

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<Auth>(defaultAuthValue);

  return (
    <SetAuthContext.Provider value={setAuth}>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </SetAuthContext.Provider>
  );
};
