import { Link } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';
import { useAuth } from '@/context/auth/useAuth';

import { Button } from '@/components/ui/Button';

export const AuthButton = () => {
  const { user } = useAuth();

  const text = user ? '내 계정' : '로그인';
  const linkTo = user ? ROUTES.HOME : ROUTES.LOGIN;

  return (
    <Link to={linkTo}>
      <Button theme="outline" width="4rem">
        {text}
      </Button>
    </Link>
  );
};
