import { useContext } from 'react';

import { AuthContext, AuthContextType } from './AuthContext';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthProvider를 반드시 사용해야합니다.');
  }

  return context;
};
