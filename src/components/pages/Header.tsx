import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from './AuthContext';

const Header: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-inner">
          <Link to="/">
            <img src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="카카오 선물하기 로고" className="logo" />
          </Link>
          <div className="login-section">
            {isLoggedIn ? (
              <Link className="account" to="/my-account">내 계정</Link>
            ) : (
              <Link className="login" to="/login">로그인</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
