import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => (
  <header>
    <h1>Gift Shop</h1>
    <nav>
      <Link to="/"><img src="	https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png" alt="카카오 선물하기 로고"></img></Link>
      <Link to="/login">Login</Link>
    </nav>
  </header>
);

export default Header;
