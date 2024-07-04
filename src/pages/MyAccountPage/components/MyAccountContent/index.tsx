import { useAuth } from '@/pages/MyAccountPage/hooks/useAuth';

import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Layout/Container';

import { buttonStyle, countainerStyle, titleStyle } from './styles';

export const MyPageContent = () => {
  const { userName, logout } = useAuth();

  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="3rem"
      css={countainerStyle}
    >
      <h1 css={titleStyle}>{userName}님 안녕하세요!</h1>
      <Button
        size="medium"
        theme="darkGray"
        width="14rem"
        css={buttonStyle}
        onClick={logout}
      >
        로그아웃
      </Button>
    </Container>
  );
};
