import './PresentBoard.css';

import React from 'react'

import PresentItem from './PresentItem'


export default function PresentBoard() {
  return (
    <div className='PresentBoard-container'>
        <div className='PresentBoard'>
        <PresentItem
            giftCategory="생일"
        />
        <PresentItem
            giftCategory="졸업선물"
        />
        <PresentItem
            giftCategory="스몰럭셔리"
        />
        <PresentItem
            giftCategory="명품선물"
        />
        <PresentItem
        giftCategory="결혼/집들이"
        />
        <PresentItem
            giftCategory="따뜻한선물"
        />
        <PresentItem
            giftCategory="가벼운선물"
        />
        <PresentItem
            giftCategory="팬심저격"
        />
        <PresentItem
            giftCategory="교환권"
        />
        <PresentItem
            giftCategory="건강/비타민"
        />
        <PresentItem
            giftCategory="과일/한우"
        />
        <PresentItem
            giftCategory="출산/키즈"
        />
        </div>
    </div>
  )
}
