import { Button } from '@/components/common/Button';

import styles from './MyAccount.module.scss';

interface MyAccountProps {
  userName: string;
}

const MyAccount: React.FC<MyAccountProps> = ({ userName }) => {
  return (
    <div className={styles.myAccount}>
      <h1>{userName}님 안녕하세요!</h1>
      <Button theme="darkGray" size="small" className={styles.logoutButton} onClick={() => {}}>
        로그아웃
      </Button>
    </div>
  );
};

export default MyAccount;
