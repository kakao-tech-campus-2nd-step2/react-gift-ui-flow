import './PresentBoard.css';

import React from 'react';

import PresentItem from './PresentItem';

export default function PresentBoard() {
  return (
    <div className="PresentBoard-container">
      <div className="PresentBoard">
        <PresentItem themeKey="birthday" giftCategory="생일" />
        <PresentItem themeKey="graduation_gift" giftCategory="졸업선물" />
        <PresentItem themeKey="small_luxury" giftCategory="스몰럭셔리" />
        <PresentItem themeKey="luxury_gift" giftCategory="명품선물" />
        <PresentItem themeKey="marriage-households" giftCategory="결혼/집들이" />
        <PresentItem themeKey="warm_present" giftCategory="따뜻한선물" />
        <PresentItem themeKey="light_present" giftCategory="가벼운선물" />
        <PresentItem themeKey="for_the_fans" giftCategory="팬심저격" />
        <PresentItem themeKey="coupon" giftCategory="교환권" />
        <PresentItem themeKey="health-vitamin" giftCategory="건강/비타민" />
        <PresentItem themeKey="fruit-korean_beef" giftCategory="과일/한우" />
        <PresentItem themeKey="birth-kids" giftCategory="출산/키즈" />
      </div>
    </div>
  );
}
