import { useAuth } from '@/hooks/useAuth';

import { Button } from '@/components/ui/Button/Button';
import { Container } from '@/components/ui/Layout/Container';

import * as styles from './styles';

export const MyPageContent = () => {
  const { userName, logout } = useAuth();

  return (
    <Container
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="3rem"
      css={styles.countainerStyle}
    >
      <h1 css={styles.titleStyle}>{userName}님 안녕하세요!</h1>
      <Button
        size="medium"
        theme="darkGray"
        width="14rem"
        css={styles.buttonStyle}
        onClick={logout}
      >
        로그아웃
      </Button>
    </Container>
  );
};
