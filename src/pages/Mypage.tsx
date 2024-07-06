//import React from 'react'

import './Mypage.css';

import { Link } from 'react-router-dom';

import { Button } from '@/components/common/Button';
import Footer from '@/components/common/Footer';
import Header, { HeaderSubtitle, HeaderTitle } from '@/components/common/Header';
import { useAuth } from '@/context/AuthContext';

const Mypage = () => {
  const { authToken, logout } = useAuth();
  return (
    <div className="Mypage">
      <div className="header">
        <Header>
          <Link to={'/'}>
            <HeaderTitle>선물하기</HeaderTitle>
          </Link>
          <Link to={authToken ? '/my-account' : '/login'}>
            <HeaderSubtitle>{authToken ? '내 계정' : '로그인'}</HeaderSubtitle>
          </Link>
        </Header>
      </div>
      <div className="mypageContainer">
        <div className="hello">{authToken}님 안녕하세요!</div>
        <div className="buttonContainer">
          <Button theme="black" size="small" onClick={logout} className="buttonLogout">
            <div className="buttonTitle">로그아웃</div>
          </Button>
        </div>
      </div>

      <Footer title="카카오톡 선물하기" />
    </div>
  );
};

export default Mypage;
