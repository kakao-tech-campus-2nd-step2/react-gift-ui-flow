import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/Button/Button';

type AuthButtonProps = {
  isLoggedIn: boolean;
};
export const AuthButton = ({ isLoggedIn }: AuthButtonProps) => {
  if (isLoggedIn) {
    return (
      <Link to="/my-account">
        <Button theme="outline" width="5rem">
          내 계정
        </Button>
      </Link>
    );
  }

  return (
    <Link to="/login">
      <Button theme="outline" width="4rem">
        로그인
      </Button>
    </Link>
  );
};
