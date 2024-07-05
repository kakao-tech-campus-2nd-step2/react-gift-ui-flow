import '@/components/Header/header.css';

import React from 'react';
import { Link } from 'react-router-dom';




export default function Header() {
  return (
    <div>
      <header className='header-container'>
        <div className='header-item'>
          <Link to='/' className='link'>
            <div className='header-item__gift'>선물하기</div>
          </Link>
          <Link to='/login' className='link'>
            <div className='header-item__login'>로그인</div>
          </Link>
        </div>
      </header>
    </div>
  )
}
