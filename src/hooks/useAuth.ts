import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../contexts/AuthContext';

// useAuth 훅, AuthContext를 사용하여 현재 인증 상태와 상태를 업뎃하는 함수를 반환
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
