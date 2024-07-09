import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './AuthContext';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // ID를 sessionStorage의 authToken key에 저장
    sessionStorage.setItem('authToken', username);
    
    // AuthContext의 login 함수 호출
    login(username);

    // 로그인 후 메인 페이지로 이동
    navigate('/');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>kakao</h1>
        <input
          type="text"
          placeholder="이름"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>로그인</button>
      </div>
    </div>
  );
};

export default LoginPage;
