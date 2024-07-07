import './GiftRanking.css';

import React, { useState } from 'react';

import GiftCategory from './GiftCategory';
import RankingBoard from './RankingBoard';
import TargetCategory from './TargetCategory';

export default function GiftRanking() {
  const [selectedTarget, setSelectedTarget] = useState('전체');
  const [selectedCategory, setSelectedCategory] = useState('받고 싶어한');

  const targetCategories = [
    { icon: 'ALL', target: '전체' },
    { icon: '👩🏻‍🦳', target: '여성이' },
    { icon: '👨🏻‍🦳', target: '남성이' },
    { icon: '🧒🏻', target: '청소년이' },
  ];

  const giftCategories = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  return (
    <div className="giftRanking">
      <div className="giftRanking__title">실시간 급상승 선물랭킹</div>
      <div className="giftRanking_container">
        {targetCategories.map((category, index) => (
          <TargetCategory
            key={index}
            icon={category.icon}
            target={category.target}
            isSelected={selectedTarget === category.target}
            onClick={() => setSelectedTarget(category.target)}
          />
        ))}
      </div>

      <div className="giftCategory">
        {giftCategories.map((category, index) => (
          <GiftCategory
            key={index}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          />
        ))}
      </div>

      <RankingBoard />
    </div>
  );
}
