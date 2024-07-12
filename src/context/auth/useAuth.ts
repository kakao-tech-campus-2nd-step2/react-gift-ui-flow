import { useContext } from 'react';
import AuthContext from './AuthContext';

const ERROR_MESSAGE = 'useAuth must be used within an AuthProvider';

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error(ERROR_MESSAGE);
  return context;
};
