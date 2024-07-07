import { createContext, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  authToken: string | null;
  setAuthToken: React.Dispatch<React.SetStateAction<string | null>>;
};

const initialAuthContext: AuthContextType = {
  authToken: sessionStorage.getItem('authToken'),
  setAuthToken: () => {},
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authToken, setAuthToken] = useState<string | null>(initialAuthContext.authToken);

  useEffect(() => {
    const token = sessionStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    } else {
      setAuthToken(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
