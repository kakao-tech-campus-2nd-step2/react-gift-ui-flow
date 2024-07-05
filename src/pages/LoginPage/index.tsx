// src/pages/LoginPage/LoginPage.tsx
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { useAuth } from '@/context/AuthContext';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthToken } = useAuth();
  const history = useHistory();

  const handleLogin = () => {
    const token = 'fakeAuthToken';
    setAuthToken(token);
    sessionStorage.setItem('authToken', token);
    history.push('/');
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <UnderlineTextField
          type="text"
          id="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </div>
      <div>
        <UnderlineTextField
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Button onClick={handleLogin} type="submit" theme="kakao" size="responsive">
        로그인
      </Button>
    </div>
  );
};

export default LoginPage;
