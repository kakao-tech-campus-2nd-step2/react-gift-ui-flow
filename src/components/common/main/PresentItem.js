import './PresentItem.css';

import React from 'react';
import { Link } from 'react-router-dom';

import { Image } from '@/components/common/Image/index';

export default function PresentItem({ giftCategory }) {
  return (
    <div className='giftItem-container'>
      <Link to="/theme" className="link-style">
        <Image
          src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          alt={giftCategory}
          width="90px"
          ratio="square"
          radius={32}
        />
        <div className='giftItem__name'>{giftCategory}</div>
      </Link>
    </div>
  );
}
