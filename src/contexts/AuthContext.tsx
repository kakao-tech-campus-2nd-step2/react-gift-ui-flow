import type { ReactNode } from 'react';
import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
    authToken: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [authToken, setAuthToken] = useState<string | null>(sessionStorage.getItem('authToken'));

    const login = (token: string) => {
        setAuthToken(token);
        sessionStorage.setItem('authToken', token);
    };

    const logout = () => {
        setAuthToken(null);
        sessionStorage.removeItem('authToken');
    };

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
