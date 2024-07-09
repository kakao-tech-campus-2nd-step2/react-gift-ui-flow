import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './AuthContext';
import Header from './Header';

const MyAccountPage: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="account-container">
      <Header />
      <div className="account-content">
        <h2>{user}님 안녕하세요!</h2>
        <button onClick={handleLogout}>로그아웃</button>
      </div>
    </div>
  );
};

export default MyAccountPage;
