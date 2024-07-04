import './../styles/Header.css';

import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isLoggedIn: boolean;
  username: string;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
  <header>
    <nav>
      <Link to="/">
        <img src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="카카오 선물하기 로고" />
      </Link>
      {isLoggedIn ? (
          <>
            <Link to="/account">내 계정</Link>
          </>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </nav>
  </header>
);
}

export default Header;
