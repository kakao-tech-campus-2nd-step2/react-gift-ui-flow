import '@/components/Header/header.css';

import React from 'react';


export default function Header() {
  return (
    <div>
      <header className='header-container'>
        <div className='header-item'>
            <div className='header-item__gift'>선물하기</div>
            <div className='header-item__login'>로그인</div>
        </div>
      </header>
    </div>
  )
}
