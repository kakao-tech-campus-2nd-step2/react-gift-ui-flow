//import React from 'react'

import './RankingSection.css'

import { useState } from "react";


const RankingSection = () => {

    const [selectedItemWho, setSelectedItemWho] = useState<string>('all');

    const handleSelectWho = (item: string) => {
        setSelectedItemWho(item);
    };

    const [selectedItemWhich, setSelectedItemWhich] = useState<string>('받고 싶어한');

    const handleSelectWhich = (item: string) => {
        setSelectedItemWhich(item);
    };


  return (
    <div className='rankingContainer'>
            <div className='rankingTitle'>실시간 급상승 선물랭킹</div>
            <div className='rankingSelectWhoContainer'>
                <div className={`rankingWhoItemContainer ${selectedItemWho === 'all' ? 'selectedItemWho' : ''}`} onClick={() => handleSelectWho('all')}>
                    <div className='whoItemImg'>ALL</div>
                    <div className='whoItemText'>전체</div>
                </div>
                <div className={`rankingWhoItemContainer ${selectedItemWho === 'woman' ? 'selectedItemWho' : ''}`} onClick={() => handleSelectWho('woman')}>
                    <div className='whoItemImg'>👩🏻‍🦳</div>
                    <div className='whoItemText'>여성이</div>
                </div>
                <div className={`rankingWhoItemContainer ${selectedItemWho === 'man' ? 'selectedItemWho' : ''}`} onClick={() => handleSelectWho('man')}>
                    <div className='whoItemImg'>👨🏻‍🦳</div>
                    <div className='whoItemText'>남성이</div>
                </div>
                <div className={`rankingWhoItemContainer ${selectedItemWho === 'children' ? 'selectedItemWho' : ''}`} onClick={() => handleSelectWho('children')}>
                    <div className='whoItemImg'>👦🏻</div>
                    <div className='whoItemText'>청소년이</div>
                </div>
            </div>
            <div className='rankingSelectBox'>
                <div className={`rankingBoxItem ${selectedItemWhich === '받고 싶어한' ? 'selectedItemWhich' : ''}`} onClick={() => handleSelectWhich('받고 싶어한')}>받고 싶어한</div>
                <div className={`rankingBoxItem ${selectedItemWhich === '많이 선물한' ? 'selectedItemWhich' : ''}`} onClick={() => handleSelectWhich('많이 선물한')}>많이 선물한</div>
                <div className={`rankingBoxItem ${selectedItemWhich === '위시로 받은' ? 'selectedItemWhich' : ''}`} onClick={() => handleSelectWhich('위시로 받은')}>위시로 받은</div>
            </div>
        </div>
  )
}

export default RankingSection