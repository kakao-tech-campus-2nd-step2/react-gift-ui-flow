import './../styles/Login.css';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Credentials {
  id: string;
  pw: string;
}

const LoginPage: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({ id: '', pw: '' });
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { id, pw } = credentials;

    if (!id || !pw) {
      alert('아이디와 비밀번호를 입력해주세요.');
      return;
    }

    alert('로그인 성공!');
    navigate('/');
  };

  return (
    <div className="container">
      <img src="https://kakao-tech-week2-kakao-gift-ui-flow.pages.dev/static/media/kakao_logo.60e99555125ae4c4b8f23f6c5faee9ec.svg" alt="카카오"></img>
      <div className="login-container">
        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-container">
            <input type="text" name="id" placeholder='이름' value={credentials.id} onChange={handleChange} required />
          </div>
          <div className="input-container">
            <input type="password" name="pw"placeholder='비밀번호' value={credentials.pw} onChange={handleChange} required />
          </div>
          <button type="submit" className="login-button">로그인</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
