import './MyPage.css';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const MyPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="my-page">
      <p>{user}님 안녕하세요!</p>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default MyPage;
