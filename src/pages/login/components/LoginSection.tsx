import { Button } from '@/components/common/Button';
import * as styles from '../styles';

const LoginSection = () => {
  return (
    <styles.SectionLayout>
      <styles.LoginInput placeholder="이름" type="text" />
      <styles.InputSpacer></styles.InputSpacer>
      <styles.LoginInput placeholder="비밀번호" type="password" />
      <styles.ButtonSpacer></styles.ButtonSpacer>
      <Button>로그인</Button>
    </styles.SectionLayout>
  );
};

export default LoginSection;
