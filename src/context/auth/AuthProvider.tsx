import { ReactNode, useCallback, useMemo, useState } from 'react';

import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | undefined>(
    sessionStorage.getItem('authToken') || undefined
  );

  const login = useCallback((username: string) => {
    sessionStorage.setItem('authToken', username);
    setUser(username);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.clear();
    setUser(undefined);
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
