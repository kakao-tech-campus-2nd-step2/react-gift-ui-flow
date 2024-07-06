import './../styles/Account.css';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';


const AccountPage: React.FC = () => {
    const { isLoggedIn, username, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
          navigate('/login', { replace: true });
        }
      }, [isLoggedIn, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="account-container">
      <h1>{username}님 안녕하세요!</h1>
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default AccountPage;
