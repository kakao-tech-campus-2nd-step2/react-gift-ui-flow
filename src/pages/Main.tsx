//import React from 'react'

import './Main.css'

import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { Image } from '@/components/common/Image'

import choonsik from '../images/choonsik.png'

const Main = () => {
  return (
    <div className='MainPage'>
        <Header title='선물하기' subtitle='로그인'/>
        <div className='selectFriend'>
            <Image
                src={choonsik}
                alt='choonsik'
                radius={20}
                ratio={'square'}
                width={70}
                height={70}
             />
            <div className='selectFriendTitle'>선물 받을 친구를 선택해주세요.</div>
        </div>
        <Footer title='카카오톡 선물하기' />
    </div>
  )
}

export default Main