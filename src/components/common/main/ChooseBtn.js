import './ChooseBtn.css';

import React from 'react'


export default function ChooseBtn() {
  return (
    <div className='chooseBtn'>
      <button className='chooseBtn-container'>
        <p className='chooseBtn__subtitle'>AI가 추천하는 선물</p>
        <p className='chooseBtn__title'>선물을 추천받고 싶은 친구를 선택해주세요.</p>
      </button>
    </div>
  )
}
