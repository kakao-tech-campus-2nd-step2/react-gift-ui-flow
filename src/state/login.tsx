import React, { createContext, useContext, useState } from 'react';

type AuthContextType = {
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  login: (id: string) => void;
  logout: () => void
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = (id: string) => {
    const authToken = generateAuthToken(id);
    sessionStorage.setItem('authToken', authToken);
    setIsLoggedIn(true);
  };

  const logout = () => {
    sessionStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const generateAuthToken = (id: string): string => {
  return `authToken_${id}`;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// import React, { createContext, useContext, useState } from 'react';

// type AuthContextType = {
//   isLoggedIn: boolean;
//   setIsLoggedIn: (loggedIn: boolean) => void;
//   id: string;
//   setId: (id: string) => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [id, setId] = useState<string>('');

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, id, setId }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// import React, { createContext, useContext, useEffect, useState } from 'react';

// type AuthContextType = {
//   isLoggedIn: boolean;
//   authToken: string | null;
//   login: (id: string, password: string) => void;
//   logout: () => void;
// };

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
//   const [authToken, setAuthToken] = useState<string | null>(null);

//   useEffect(() => {
//     const authTokenFromSession = sessionStorage.getItem('authToken');
//     if (authTokenFromSession) {
//       setAuthToken(authTokenFromSession);
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const login = (id: string) => {
//     const authToken = generateAuthToken(id);
//     sessionStorage.setItem('authToken', authToken);
//     setAuthToken(authToken);
//     setIsLoggedIn(true);
//   };

//   const logout = () => {
//     sessionStorage.removeItem('authToken');
//     setAuthToken(null);
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider value={{ isLoggedIn, authToken, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };

// // 예시용 함수 - 실제로는 보안을 고려해야 합니다.
// const generateAuthToken = (id: string): string => {
//   return `authToken_${id}`;
// };