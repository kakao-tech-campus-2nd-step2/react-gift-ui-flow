import React, { createContext, useContext, useMemo, useState } from 'react'


const token = sessionStorage.getItem('authToken')

export const IsLoginContext = createContext({ isLogin: (token !== null) ? true : false })


export function IsLoginProvider({ children }) {
    const [isLogin, setIsLogin] = useState((token !== null) ? true : false)
    const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin])

    return (
        <IsLoginContext.Provider value={value}>
            {children}
        </IsLoginContext.Provider>
    );
  };

export function useIsLoginState() {
    const context = useContext(IsLoginContext)

    if (!context) {
      throw new Error('Cannot find IsLoginProvider')
    }

    return context.isLogin
  }
