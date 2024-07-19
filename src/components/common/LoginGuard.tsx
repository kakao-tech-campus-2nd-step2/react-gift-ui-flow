import { useIsLogin } from 'context/UserContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginGuard({ children }: { children: React.ReactElement }): React.ReactElement {
  const isLogin = useIsLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate('/login', { replace: true });
    }
  }, [isLogin, navigate]);

  if (isLogin) {
    return children;
  } else {
    return <div />;
  }
}

export default LoginGuard;
