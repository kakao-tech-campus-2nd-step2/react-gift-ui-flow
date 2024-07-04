import { useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';

import styles from './Login.module.scss';

const Login: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    sessionStorage.setItem('authToken', id);
    navigate(from, { replace: true });
  };

  return (
    <div className={styles.login}>
      <div className={styles.kakao}>kakao</div>
      <div onSubmit={handleLogin} className={styles.inputBox}>
        <div className={styles.input}>
          <UnderlineTextField
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="이름"
          />
          <UnderlineTextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호"
          />
        </div>

        <Button type="submit" theme="kakao" size="small">
          로그인
        </Button>
      </div>
    </div>
  );
};

export default Login;
