import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';

import styles from './Login.module.scss';
const Login = () => {
  return (
    <div className={styles.login}>
      <div className={styles.kakao}>kakao</div>
      <div className={styles.inputBox}>
        <div className={styles.input}>
          <UnderlineTextField placeholder="이름" />
          <UnderlineTextField placeholder="비밀번호" />
        </div>

        <Button theme="kakao" size="small">
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
