import '@/components/common/Header/Header.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '@/components/Login/AuthContext';

export const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header className="header">
      <div className="header-content">
        <div className="title">
          <Link to="/">
            <img
              src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
              alt="카카오 선물하기 로고"
            />
          </Link>
        </div>
        <div className="login">
          {user ? <Link to="/my-account">내 계정</Link> : <Link to="/login">로그인</Link>}
        </div>
      </div>
    </header>
  );
};
