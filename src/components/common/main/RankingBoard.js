import './RankingBoard.css';

import React, { useState } from 'react';

import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';

const GoodsList = () => {
  const goodsData = [];
  const [showAll, setShowAll] = useState(true);
  let visibleItems = showAll ? 21 : 6;

  for (let i = 1; i <= 22; i++) {
    goodsData.push({
      rankingIndex: i,
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      amount: 29000,
    });
  }

  const handleShowMore = () => {
    setShowAll(true);
    visibleItems = 21;
  };

  const handleShowLess = () => {
    setShowAll(false);
    visibleItems = 6;
  };

  return (
    <div className="goods-container">
      <div className="goods-list">
        {goodsData.map(
          (item, index) =>
            item.rankingIndex <= visibleItems && (
              <RankingGoodsItems
                key={index}
                rankingIndex={item.rankingIndex}
                imageSrc={item.imageSrc}
                subtitle={item.subtitle}
                title={item.title}
                amount={item.amount}
              />
            ),
        )}
      </div>
      <div className="showBtn-container">
        {showAll ? (
          <button className="showBtn" onClick={handleShowLess}>
            접기
          </button>
        ) : (
          <button className="showBtn" onClick={handleShowMore}>
            더보기
          </button>
        )}
      </div>
    </div>
  );
};

export default GoodsList;
