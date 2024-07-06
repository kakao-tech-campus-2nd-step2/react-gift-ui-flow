import '@/components/common/main/ChooseFriend.css';

import React from 'react'

import { Image } from '@/components/common/Image/index.tsx';


export default function ChooseFriend() {
  const handleClick = () => {
    alert("선물 받을 친구 선택하기");
  }

  return (
    <div className='ChoseFriend-container'>
        <div className='ChoseFriend-inner'>
            <Image
                src='https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png'
                alt='친구 선택 아이콘'
                width='70px'
                ratio='square'
                radius={25}
                onClick={handleClick}
            />
            <p className='ChoseFriend-inner__text'>선물 받을 친구를 선택해주세요</p>
        </div>
    </div>
  )
}
