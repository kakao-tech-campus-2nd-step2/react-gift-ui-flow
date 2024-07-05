import { createContext } from "react";

interface AuthState {
    isAuthenticated: boolean;
    setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export default createContext<AuthState>({ isAuthenticated: false, setIsAuthenticated: () => {} });