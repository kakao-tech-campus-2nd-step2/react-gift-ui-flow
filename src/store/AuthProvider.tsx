import { createContext, useEffect, useState } from 'react';
interface AuthToken {
  id: string;
  pw: string;
}
interface AuthContextType {
  authToken: AuthToken | null;
  setAuthToken: (authToken: AuthToken | null) => void;
}
export const AuthContext = createContext<AuthContextType>({
  authToken: null,
  setAuthToken: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const token = sessionStorage.getItem('authToken');
  const [authToken, setAuthToken] = useState<AuthToken | null>(null);

  useEffect(() => {
    if (token) {
      setAuthToken(JSON.parse(token as string));
    }
  }, [token]);
  return <AuthContext.Provider value={{ authToken, setAuthToken }}>{children}</AuthContext.Provider>;
}
