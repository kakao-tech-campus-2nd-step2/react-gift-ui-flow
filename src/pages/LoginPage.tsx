import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface LoginPageProps {
  onLogin: (name: string) => void;
}

const loginContainerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const loginBoxStyle: React.CSSProperties = {
  width: '600px',
  padding: '40px',
  border: '1px solid #ddd',
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  marginBottom: '16px',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '16px',
};

const buttonStyle: React.CSSProperties = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#FFD700',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
};

const titleStyle: React.CSSProperties = {
  margin: '0 0 20px 0',
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333333',
  textAlign: 'center',
};

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [name, setUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(name);
    sessionStorage.setItem('authToken', name); // Save the username in sessionStorage
    navigate(from, { replace: true });
  };

  return (
    <div style={loginContainerStyle}>
      <div style={loginBoxStyle}>
        <h1 style={titleStyle}>Kakao</h1>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setUsername(e.target.value)}
            style={inputStyle}
          />
          <input type="password" placeholder="비밀번호" style={inputStyle} />
          <button type="submit" style={buttonStyle}>
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
