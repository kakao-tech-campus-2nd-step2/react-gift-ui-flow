import './Header.css'; // 스타일링을 위한 CSS 파일

import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to="/">선물하기</Link>
            </div>
            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/my-account">My Account</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
