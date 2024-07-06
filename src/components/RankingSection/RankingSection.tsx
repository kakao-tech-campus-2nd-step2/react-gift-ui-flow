//import React from 'react'

import './RankingSection.css';

import { useState } from 'react';

import { Button } from '@/components/common/Button';

import ranking01 from '../../images/ranking01.png';
import { RankingGoodsItems } from '../common/GoodsItem/Ranking';

const RankingSection = () => {
  const [selectedItemWho, setSelectedItemWho] = useState<string>('all');

  const handleSelectWho = (item: string) => {
    setSelectedItemWho(item);
  };

  const [selectedItemWhich, setSelectedItemWhich] = useState<string>('받고 싶어한');

  const handleSelectWhich = (item: string) => {
    setSelectedItemWhich(item);
  };

  const [more, setMore] = useState<boolean>(false);

  const handleMore = () => {
    setMore((prevMore) => !prevMore);
  };

  // 21개 아이템 더미데이터 생성
  const generateDummyItems = () => {
    const dummyItems = [];
    for (let i = 1; i <= 21; i++) {
      dummyItems.push({
        rankingIndex: i,
        subtitle: 'BBQ',
        title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
        amount: 29000,
        imageSrc: ranking01,
      });
      //dummyItems.push({ name: `Product ${i}`, price: 29000 + i, imageUrl: {image${i}} });
    }
    return dummyItems;
  };

  const items = generateDummyItems();
  const visibleItems = more ? items : items.slice(0, 6);

  return (
    <div className="rankingContainer">
      <div className="rankingTitle">실시간 급상승 선물랭킹</div>
      <div className="rankingSelectWhoContainer">
        <div
          className={`rankingWhoItemContainer ${selectedItemWho === 'all' ? 'selectedItemWho' : ''}`}
          onClick={() => handleSelectWho('all')}
        >
          <div className="whoItemImg">ALL</div>
          <div className="whoItemText">전체</div>
        </div>
        <div
          className={`rankingWhoItemContainer ${selectedItemWho === 'woman' ? 'selectedItemWho' : ''}`}
          onClick={() => handleSelectWho('woman')}
        >
          <div className="whoItemImg">👩🏻‍🦳</div>
          <div className="whoItemText">여성이</div>
        </div>
        <div
          className={`rankingWhoItemContainer ${selectedItemWho === 'man' ? 'selectedItemWho' : ''}`}
          onClick={() => handleSelectWho('man')}
        >
          <div className="whoItemImg">👨🏻‍🦳</div>
          <div className="whoItemText">남성이</div>
        </div>
        <div
          className={`rankingWhoItemContainer ${selectedItemWho === 'children' ? 'selectedItemWho' : ''}`}
          onClick={() => handleSelectWho('children')}
        >
          <div className="whoItemImg">👦🏻</div>
          <div className="whoItemText">청소년이</div>
        </div>
      </div>
      <div className="rankingSelectBox">
        <div
          className={`rankingBoxItem ${selectedItemWhich === '받고 싶어한' ? 'selectedItemWhich' : ''}`}
          onClick={() => handleSelectWhich('받고 싶어한')}
        >
          받고 싶어한
        </div>
        <div
          className={`rankingBoxItem ${selectedItemWhich === '많이 선물한' ? 'selectedItemWhich' : ''}`}
          onClick={() => handleSelectWhich('많이 선물한')}
        >
          많이 선물한
        </div>
        <div
          className={`rankingBoxItem ${selectedItemWhich === '위시로 받은' ? 'selectedItemWhich' : ''}`}
          onClick={() => handleSelectWhich('위시로 받은')}
        >
          위시로 받은
        </div>
      </div>
      <div className="rankingItemContainer">
        {visibleItems.map((item) => (
          <div className="rankingItem">
            <RankingGoodsItems
              rankingIndex={item.rankingIndex}
              imageSrc={item.imageSrc}
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
            />
          </div>
        ))}
      </div>
      <div className="buttonContainerSimple">
        <Button theme="outline" size="responsive" className="button02" onClick={handleMore}>
          <div className="buttonTitle02">{more ? '접기' : '더보기'}</div>
        </Button>
      </div>
    </div>
  );
};

export default RankingSection;
