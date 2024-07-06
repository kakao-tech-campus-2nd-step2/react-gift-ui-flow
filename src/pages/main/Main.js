import './Main.css';

import React from 'react'

import GiftRanking from '@/components/common/main/GiftRanking';
import ThemeCategory from '@/components/common/main/ThemeCategory';


export default function Main() {
    return(
        <div className='main-container'>
          <ThemeCategory/>
          <GiftRanking/>
        </div>
    );
}
