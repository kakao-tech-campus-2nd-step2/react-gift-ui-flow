// src/pages/LoginPage/LoginPage.tsx
import { useState } from 'react';

import { Button } from '@/components/common/Button';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    alert(`로그인 처리`);
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <input
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
