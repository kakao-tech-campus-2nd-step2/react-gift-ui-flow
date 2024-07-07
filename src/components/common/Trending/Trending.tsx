import styled from "@emotion/styled";
import { useState } from "react";

import { RankingGoodsItems } from "../GoodsItem/Ranking";

// 아이템 Array
const RankedItems = [
  {
    rankingIndex: 1,
    imageSrc: 'https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202406/12/88c03a13-b0fb-4871-9312-4055e8f1e4ad.jpg',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },
  {
    rankingIndex: 2,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },  
  {
    rankingIndex: 3,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },  
  {
    rankingIndex: 4,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },  
  {
    rankingIndex: 5,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },  
  {
    rankingIndex: 6,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },  
  {
    rankingIndex: 7,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },  
  {
    rankingIndex: 8,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },  
  {
    rankingIndex: 9,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },  
  {
    rankingIndex: 10,
    imageSrc: 'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    subtitle: '카카오 프렌즈 특별 한정판',
    title: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  }
]

// 실시간 급상승이기에 Trending이라는 함수명을 사용하였습니다.
// RankedItems와 Trending 중에 고민하였는데, 혹시 어떻게 정하는 것이 더 좋을까요?
export const Trending = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  let showItem = RankedItems;

  // 한 줄씩 나오게 하고 싶은데, 아직까지는 전부 보여주는 것 밖에는 구현하지 못했습니다. 혹시 어떻게 하면 좋을지 힌트 주실 . 수있으면 감사하겠습니다!
  if (!isShowMore) {
    showItem = RankedItems.slice(0, 4);
  } else {
    showItem = RankedItems;
  };
  

  return(
    <TrendingWrapper>
        <TrendingItems>
          {showItem.map((item)=> (
            <RankingGoodsItems {...item}/>
          ))}
        </TrendingItems>
          {showItem.length >= 4 && (
            <ShowMoreButton onClick={() => setIsShowMore(!isShowMore)}>{isShowMore ? '접기' : '더보기'}</ShowMoreButton>
          )}
    </TrendingWrapper>
  )
}

const TrendingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
`

const TrendingItems = styled.div`
  margin: 15px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  overflow-x: scroll;
`

const ShowMoreButton = styled.button`
  cursor: pointer;
  border: 1px solid;
  padding: 10px;
  width: 200px;
`