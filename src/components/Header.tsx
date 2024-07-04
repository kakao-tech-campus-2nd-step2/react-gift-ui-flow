import './../styles/Header.css';

import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '@/context/AuthContext';

const Header: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginRedirect = () => {
    navigate('/login', { state: { from: location } });
  };

  return (
    <header>
      <nav>
        <Link to="/">
          <img src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="카카오 선물하기 로고" />
        </Link>
        {isLoggedIn ? (
          <Link to="/account">내 계정</Link>
        ) : (
          <button onClick={handleLoginRedirect}>로그인</button>
        )}
      </nav>
    </header>
  );
};

export default Header;