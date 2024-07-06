import '@/components/Header/header.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { useIsLoginState } from '@/components/contextAPI/useIsLoginState';



export default function Header() {
  const isLogin = useIsLoginState();

  return (
    <div>
      <header className='header-container'>
        <div className='header-item'>
          <Link to='/' className='link'>
            <div className='header-item__gift'>선물하기</div>
          </Link>
          {
            isLogin? (
                <Link to='/my-account' className='link'>
                  <div className='header-item__login'>내 계정</div>
                </Link>
            ) : (
                <Link to='/login' className='link'>
                  <div className='header-item__login'>로그인</div>
                </Link>
            )
          }
        </div>
      </header>
    </div>
  )
}
