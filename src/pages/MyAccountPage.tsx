import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

const containerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  textAlign: 'center',
};

const titleStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
};

const buttonStyle: React.CSSProperties = {
  padding: '10px 90px', // 버튼 길이를 더 길게 설정
  backgroundColor: '#4A4A4A',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  color: '#FFFFFF',
  fontSize: '16px',
};

const MyAccountPage: React.FC = () => {
  const { username, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>{username}님 안녕하세요!</h1>
      <button onClick={handleLogout} style={buttonStyle}>
        로그아웃
      </button>
    </div>
  );
};

export default MyAccountPage;
