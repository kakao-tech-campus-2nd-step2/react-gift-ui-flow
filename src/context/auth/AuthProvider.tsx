import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [user, setUser] = useState<string | undefined>(
    sessionStorage.getItem('authToken') || undefined
  );

  useEffect(() => {
    const storedUser = sessionStorage.getItem('authToken') || undefined;
    setUser(storedUser);
  }, [location]);

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
