import { Button } from '@/components/common/Button';
import { useAuth } from '@/context/AuthContext';

import styles from './MyAccount.module.scss';

const MyAccount = () => {
  const { authToken, logout } = useAuth();

  return (
    <div className={styles.myAccount}>
      <h1>{authToken}님 안녕하세요!</h1>
      <Button
        theme="darkGray"
        size="small"
        className={styles.logoutButton}
        onClick={() => {
          logout();
        }}
      >
        로그아웃
      </Button>
    </div>
  );
};

export default MyAccount;
