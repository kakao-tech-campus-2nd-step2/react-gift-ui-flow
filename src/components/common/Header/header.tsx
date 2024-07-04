import '@/components/common/Header/Header.css';

import { Link } from 'react-router-dom';

export const Header = () => {
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
          <Link to="/login">
            <p>로그인</p>
          </Link>
        </div>
      </div>
    </header>
  );
};
