import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import { UnderlineTextField } from '@/components/common/Form/Input/UnderlineTextField';
import { useAuth } from '@/context/useAuth';

const LoginPage: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login(id);
    alert('로그인 처리');
    navigate(-1); // 직전 페이지로 리디렉션
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
