import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="/">선물하기</a>
          </li>
          <li>
            <a href="/login">로그인</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
