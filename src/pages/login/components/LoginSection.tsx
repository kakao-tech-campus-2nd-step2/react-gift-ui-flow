import { Button } from '@/components/common/Button';
import * as styles from '../styles';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@/constants/Path';
import { useState } from 'react';

const LoginSection = () => {
  const [userId, setUserId] = useState<string>('');
  const navigate = useNavigate();

  const HandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const HandlerLogin = () => {
    sessionStorage.setItem('authToken', userId);
    navigate(PATHS.MAIN);
  };
  return (
    <styles.SectionLayout>
      <styles.LoginInput placeholder="이름" value={userId} onChange={HandlerChange} type="text" />
      <styles.InputSpacer></styles.InputSpacer>
      <styles.LoginInput placeholder="비밀번호" type="password" />
      <styles.ButtonSpacer></styles.ButtonSpacer>
      <Button onClick={HandlerLogin}>로그인</Button>
    </styles.SectionLayout>
  );
};

export default LoginSection;
