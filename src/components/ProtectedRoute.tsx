import { Navigate, useLocation } from 'react-router-dom';
import { useLogin } from '../hooks/LoginContext';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoggedIn, setRedirectPath } = useLogin();
  const location = useLocation();

  if (!isLoggedIn) {
    setRedirectPath(location.pathname);
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;