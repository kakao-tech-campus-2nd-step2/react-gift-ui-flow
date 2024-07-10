import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from "@/utils/sessionStorage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

interface AuthContextProviderProps {
  children: React.ReactNode;
}
const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    setUsername(getAccessToken());
  }, [getAccessToken]);

  const login = (username: string) => {
    setUsername(username);
    setAccessToken(username);
  };

  const logout = () => {
    setUsername("");
    removeAccessToken();
  };

  return (
    <AuthContext.Provider
      value={{
        username,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
