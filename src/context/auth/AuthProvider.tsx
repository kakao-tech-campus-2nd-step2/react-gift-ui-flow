import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AuthContext } from './AuthContext';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const [user, setUser] = useState<string | undefined>(
    sessionStorage.getItem('authToken') || undefined
  );
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUser = sessionStorage.getItem('authToken') || undefined;
    setUser(storedUser);
    setIsLoggedIn(!!storedUser);
  }, [location]);

  const login = useCallback((username: string) => {
    sessionStorage.setItem('authToken', username);
  }, []);

  const logout = useCallback(() => {
    sessionStorage.clear();
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      isLoggedIn,
      login,
      logout,
    }),
    [user, isLoggedIn, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
