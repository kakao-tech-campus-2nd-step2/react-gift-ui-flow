import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>선물하기</h1>
      <nav>
        <ul>
          <li>
            <a href="/">홈</a>
          </li>
          <li>
            <a href="/wish">위시</a>
          </li>
          <li>
            <a href="/present">선물함</a>
          </li>
          <li>
            <a href="/category">카테고리</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
