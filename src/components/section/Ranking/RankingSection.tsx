import styled from '@emotion/styled';
import { useState } from 'react';

import { Container } from '@/components/common/layouts/Container';
import { breakpoints } from '@/styles/variants';
import { rankingItems } from '@/data/giftItems';

import { GiftCategories } from './Categories/GiftCategories';
import { WhoCategories } from './Categories/WhoCategories';
import { RankingItems } from './RankingItems';

export const RankingSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | '전체'>('전체');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };
  //선물 아이템이 모두 동일하므로, 랭킹 인덱스로 대체
  const filteredItems = selectedCategory
    ? rankingItems.filter((item) => {
        if (selectedCategory === '전체') {
          return true;
        } else if (selectedCategory === '여성이') {
          return item.rankingIndex >= 1 && item.rankingIndex <= 10;
        } else if (selectedCategory === '남성이') {
          return item.rankingIndex >= 11 && item.rankingIndex <= 21;
        } else if (selectedCategory === '청소년이') {
          return item.rankingIndex >= 22;
        } else if (selectedCategory === '받고 싶어한') {
          return item.rankingIndex >= 1 && item.rankingIndex <= 10;
        } else if (selectedCategory === '많이 선물한') {
          return item.rankingIndex >= 11 && item.rankingIndex <= 21;
        } else if (selectedCategory === '위시로 받은') {
          return item.rankingIndex >= 22;
        }
        return false;
      })
    : rankingItems;

  return (
    <SectionWrapper>
      <Container maxWidth="1024px">
        <Title>실시간 급상승 선물랭킹</Title>
        <ContentWrapper>
          <WhoCategories onCategoryChange={handleCategoryChange} />
          <Space />
          <GiftCategories onCategoryChange={handleCategoryChange} />
          <RankingItems items={filteredItems} />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

const Title = styled.h2`
  @media screen and (min-width: ${breakpoints.sm}) {
    text-align: center;
    font-size: 35px;
    line-height: 50px;
  }
  width: 100%;
  font-weight: 700;
`;

const SectionWrapper = styled.section`
  padding: 0px 16px 32px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 0px 16px 80px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 20px 0px 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Space = styled.div`
  width: 100%;
  background-color: inherit;
  height: 16px;
`;
