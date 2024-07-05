import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '@/App-core/AuthContext';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  if (!isLoggedIn) {
    sessionStorage.setItem('redirectPath', location.pathname + location.search); // 현재 경로 저장
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
