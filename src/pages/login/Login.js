import './Login.css';

import React from 'react'

import LoginBoard from '@/components/common/Login/LoginBoard';


export default function login() {
  return (
    <div className='login-container'>
      <div className='login__title'>kakao</div>
      <LoginBoard/>
    </div>
  )
}
