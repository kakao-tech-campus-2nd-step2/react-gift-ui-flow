import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import MenuButton from './MenuButton';
import RankingList from './RankingList';

const genderFilterItems = [
  { icon: 'ALL', text: '전체', value: 'ALL' },
  { icon: '👩‍🦰', text: '여성이', value: '여성이' },
  { icon: '👱‍♂️', text: '남성이', value: '남성이' },
  { icon: '👦🏻', text: '청소년이', value: '청소년이' },
] as const

const wishFilterItems = [
  '받고 싶어한',
  '많이 선물한',
  '위시로 받은'
] as const

type GenderFilterType = (typeof genderFilterItems)[number]['value']
type WishFilterType = (typeof wishFilterItems)[number]

export default function GiftRanking() {
  const [genderFilter, setGenderFilter] = useState<GenderFilterType>('ALL')
  const [wishFilter, setWishFilter] = useState<WishFilterType>('받고 싶어한')

  const handleGenderFilterChange = (filter: GenderFilterType) => {
    setGenderFilter(filter);
  }

  const handleWishFilterChange = (filter: WishFilterType) => {
    setWishFilter(filter);
  }
  
  const isActiveButton = (value: GenderFilterType | WishFilterType, activeValue: GenderFilterType | WishFilterType) => {
    return value === activeValue
  }

  useEffect(() => {
    console.log(genderFilter)
  }, [genderFilter])

  useEffect(() => {
    console.log(wishFilter)
  }, [wishFilter])

  return (
    <GiftRankingWrapper>
      <GiftRankingInner>
        <GiftRankingTitle>실시간 급상승 선물랭킹</GiftRankingTitle>

        <GiftRankingMenuContainer>
          <GiftRankingMenuTop>
            {genderFilterItems.map((item) => (
              <MenuButton
                key={item.value}
                icon={item.icon}
                text={item.text}
                active={isActiveButton(item.value, genderFilter)}
                onClick={() => handleGenderFilterChange(item.value)}
              />
            ))}
          </GiftRankingMenuTop>

          <EmptyField />

          <GiftRankingMenuBottom>
            {wishFilterItems.map((text) => (
                <GiftRankingMenuBottomText
                  key={text}
                  active={isActiveButton(text, wishFilter)}
                  onClick={() => handleWishFilterChange(text)}
                >
                  {text}
                </GiftRankingMenuBottomText>
              )  
            )}
          </GiftRankingMenuBottom>
        </GiftRankingMenuContainer>

        <RankingList />
      </GiftRankingInner>
    </GiftRankingWrapper>
  );
}

const GiftRankingWrapper = styled.section`
  width: 100vw;
  height: 806px;
  display: flex;
  justify-content: center;
`;

const GiftRankingInner = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const GiftRankingTitle = styled.h2`
  width: 100%;
  font-size: 35px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
`;

const GiftRankingMenuContainer = styled.div`
  width: 100%;
  height: 207px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px 7px;
`;

const GiftRankingMenuTop = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const EmptyField = styled.div`
  width: 100%;
  height: 16px;
  background-color: #fff;
`;

const GiftRankingMenuBottom = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: rgb(230, 241, 255);
  border: 1px solid rgba(70, 132, 233, 0.1);
  border-radius: 8px;
`;

const GiftRankingMenuBottomText = styled.button<{ active: boolean }>`
  outline: none;
  text-align: center;
  width: 177px;
  font-weight: ${(props) => (props.active ? '700' : '400')};
  height: 62px;
  font-size: 22px;
  line-height: 22px;
  color: ${(props) => (props.active ? 'rgb(70, 132, 233, 1)' : 'rgb(70, 132, 233, 0.7)')};
`;