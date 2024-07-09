import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type AuthContextType = {
  authToken: string | null;
  saveAuthToken: (token: string) => void;
  deleteAuthToken: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authToken, setAuthToken] = useState<string | null>(sessionStorage.getItem('authToken'));

  useEffect(() => {
    if (authToken) {
      sessionStorage.setItem('authToken', authToken);
    } else {
      sessionStorage.removeItem('authToken');
    }
  }, [authToken]);

  const saveAuthToken = (token: string) => {
    setAuthToken(token);
  };

  const deleteAuthToken = () => {
    setAuthToken(null);
  };

  return (
    <AuthContext.Provider value={{ authToken, saveAuthToken, deleteAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
};
