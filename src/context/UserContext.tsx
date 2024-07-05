import React, { createContext, useContext, useMemo, useState } from 'react';

const authToken = sessionStorage.getItem('authToken');

export const UserContext = createContext({ isLogin: authToken !== null, authToken });

export function UserContextProvider({ children }: { children: React.ReactNode }) {
  const [isLogin, setIsLogin] = useState(authToken !== null && authToken !== '');

  const value = useMemo(() => ({ isLogin, authToken, setIsLogin }), [isLogin, setIsLogin]);
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export function useIsLogin() {
  const context = useContext(UserContext);
  if (!context) throw new Error('Cannot find UserContextProvider');
  return context.isLogin;
}
