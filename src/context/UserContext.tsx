import { createContext, useContext, useState } from 'react';

export const UserContext = createContext<string | null>(sessionStorage.getItem('authToken'));
export const SetUserContext = createContext<React.Dispatch<React.SetStateAction<string>>>(() => {});

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string>(sessionStorage.getItem('authToken') || '');

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>{children}</SetUserContext.Provider>
    </UserContext.Provider>
  );
}

export function useIsLogin() {
  const user = useContext(UserContext);

  return user !== '';
}
