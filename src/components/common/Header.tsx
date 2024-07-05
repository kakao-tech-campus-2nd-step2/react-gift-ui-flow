import '../../styles/Header.css';  // CSS 파일 경로를 지정합니다.

import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

const Header: React.FC = () => {
    const { authToken } = useAuth();

    return (
        <div className="header">
            <Link to='/'>
                <img src='https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png' alt='선물하기' className="giftIcon" />
            </Link>
            <Link to={authToken ? "/my-account" : "/login"} className="login">
                {authToken ? "내 계정" : "로그인"}
            </Link>
        </div>
    );
};

export default Header;
