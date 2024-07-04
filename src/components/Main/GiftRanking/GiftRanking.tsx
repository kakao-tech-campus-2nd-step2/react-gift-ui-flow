/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';

import { FilterButton } from './FilterButton';

const filters = [
  { icon: 'All', title: '전체' },
  { icon: '👩🏻‍🦳', title: '여성이' },
  { icon: '👨🏻‍🦳', title: '남성이' },
  { icon: '👦🏻', title: '청소년이' },
];

const allGifts = [
  {
    rankingIndex: 1,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
  {
    rankingIndex: 2,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
  {
    rankingIndex: 3,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
  {
    rankingIndex: 4,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
  {
    rankingIndex: 5,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
  {
    rankingIndex: 6,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
  {
    rankingIndex: 7,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
  {
    rankingIndex: 8,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 100000000000,
  },
];

export const GiftRanking = () => {
  const [gifts, setGifts] = useState(allGifts.slice(0, 6));
  const [filterWho, setFilterWho] = useState<string>('전체');
  const [filterWhy, setFilterWhy] = useState<string>('받고싶어한');
  const [showMore, setShowMore] = useState<boolean>(false);

  const handleFilterWho = (newfilter: string) => {
    setFilterWho(newfilter);
  };
  const handleFilterWhy = (newfilter: string) => {
    setFilterWhy(newfilter);
  };
  const toggleShowMore = () => {
    if (!showMore) {
      setGifts(allGifts); // Show all gifts
      setShowMore(true);
    } else {
      setGifts(allGifts.slice(0, 6)); // Show only the first 6 gifts
      setShowMore(false);
    }
  };

  return (
    <div>
      <p>실시간 급상승 선물랭킹</p>
      <div>
        {filters.map((filter) => (
          <FilterButton
            icon={filter.icon}
            title={filter.title}
            onClick={() => handleFilterWho(filter.title)}
          />
        ))}
      </div>
      <div className="filter-container">
        <button onClick={() => handleFilterWhy('받고 싶어한')}>받고 싶어한</button>
        <button onClick={() => handleFilterWhy('많이 선물한')}>많이 선물한</button>
        <button onClick={() => handleFilterWhy('위시로 받은')}>위시로 받은</button>
      </div>
      <div>
        {allGifts.map((gift) => (
          <RankingGoodsItems {...gift} />
        ))}
      </div>
      <button onClick={toggleShowMore}>{showMore ? '접기' : '더보기'}</button>
    </div>
  );
};
