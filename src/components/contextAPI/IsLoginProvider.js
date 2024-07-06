import React, { useMemo, useState } from 'react';

import { IsLoginContext } from './IsLoginContext';


const token = sessionStorage.getItem('authToken');

export function IsLoginProvider({ children }) {
    const [isLogin, setIsLogin] = useState((token !== null) ? true : false);
    const value = useMemo(() => ({ isLogin, setIsLogin }), [isLogin, setIsLogin]);

    return (
        <IsLoginContext.Provider value={value}>
            {children}
        </IsLoginContext.Provider>
    );
};
