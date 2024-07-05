import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/auth/useAuth';

import { Button } from '@/components/ui/Button';

export const AuthButton = () => {
  const { isLoggedIn } = useAuth();

  const text = isLoggedIn ? '내 계정' : '로그인';
  const linkTo = isLoggedIn ? ROUTES.MY_ACCOUNT : ROUTES.LOGIN;

  return (
    <Link to={linkTo}>
      <Button theme="outline" width="4rem">
        {text}
      </Button>
    </Link>
  );
};
