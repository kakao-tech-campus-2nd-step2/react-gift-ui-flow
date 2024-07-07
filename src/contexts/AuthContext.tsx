import React, { createContext, useState, useMemo, ReactNode } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  // eslint-disable-next-line no-unused-vars
  login: (id: string) => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    // eslint-disable-next-line implicit-arrow-linebreak
    sessionStorage.getItem('authToken'),
  // eslint-disable-next-line function-paren-newline
  );

  const login = (id: string) => {
    sessionStorage.setItem('authToken', id);
    setIsLoggedIn(() => sessionStorage.getItem('authToken'));
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setIsLoggedIn(() => sessionStorage.getItem('authToken'));
  };

  const value = useMemo(
    () => ({
      isLoggedIn: !!isLoggedIn,
      login,
      logout,
    }),
    [isLoggedIn],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
