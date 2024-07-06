import './MyPage.css';

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { IsLoginContext } from '@/components/contextAPI/IsLoginContext';

export default function MyPage() {
  const navigate = useNavigate();
  const { setIsLogin } = useContext(IsLoginContext);

  const userName = sessionStorage.getItem('authToken');

  const handleLogout = () => {
    setIsLogin(false);
    sessionStorage.removeItem('authToken');

    navigate('/');
  };

  return (
    <div className="myPage">
      <div className="myPage-container">
        <div className="myPage__welcome">{userName}님 안녕하세요!</div>
        <button className="myPage__btn" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
