import styled from '@emotion/styled';
import React, { useState } from 'react';

import CategoryBar from '@/components/Category/CategoryBar';
import CategoryItem from '@/components/Category/CategoryItem';
import { Button } from '@/components/common/Button';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Image } from '@/components/common/Image';
import { Container } from '@/components/common/layouts/Container/index';
import { Grid } from '@/components/common/layouts/Grid/index';
import categoryItems from '@/data/CategoryItems';
import rankingItems from '@/data/RankingItems';
import useFilters from '@/hooks/useFilters';

const handleImageClick = () => {
  alert('선물을 받을 친구를 선택하세요!');
};

const MainPage: React.FC = () => {
  const { selectedCategory, selectedSubCategory, setSelectedCategory, setSelectedSubCategory } =
    useFilters();
  const [showAllRankings, setShowAllRankings] = useState(false);

  const toggleShowRankings = () => {
    setShowAllRankings((prevShowAllRankings) => !prevShowAllRankings);
  };

  const visibleRankingItems = showAllRankings ? rankingItems : rankingItems.slice(0, 6);

  return (
    <Container>
      <StyledContainer>
        <InlineContent>
          <ClickableImage
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            alt="친구 선택 유도 아이콘"
            width={40}
            height={40}
            radius={15}
            onClick={handleImageClick}
          />
          <ContentText>선물 받을 친구를 선택하기</ContentText>
        </InlineContent>
      </StyledContainer>
      <CategoryGrid columns={4} gap={20}>
        {categoryItems.map((item) => (
          <CategoryItem key={item.id} item={item} />
        ))}
      </CategoryGrid>
      <RecommendedContainer>
        <RecommendedInnerContainer>
          <RecommendedSubText>AI가 추천하는 선물</RecommendedSubText>
          <RecommendedText>선물을 추천받고 싶은 친구를 선택해주세요.</RecommendedText>
        </RecommendedInnerContainer>
      </RecommendedContainer>
      <RankingContainer>
        <RankingText>실시간 급상승 선물랭킹</RankingText>
        <CategoryBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedSubCategory={selectedSubCategory}
          setSelectedSubCategory={setSelectedSubCategory}
        />
        <Grid columns={3} gap={10}>
          {visibleRankingItems.map((item) => (
            <RankingGoodsItems
              key={item.rankingIndex}
              rankingIndex={item.rankingIndex}
              subtitle={item.subtitle}
              title={item.title}
              amount={item.amount}
              imageSrc={item.imageSrc}
            />
          ))}
        </Grid>
        <ButtonWrapper>
          <Button theme="lightGray" size="responsive" onClick={toggleShowRankings}>
            {showAllRankings ? '접기' : '더보기'}
          </Button>
        </ButtonWrapper>
      </RankingContainer>
    </Container>
  );
};

// Styled components definitions
const InlineContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ClickableImage = styled(Image)`
  margin-left: 20px;
  cursor: pointer;
`;

const StyledContainer = styled(Container)`
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 76px;
`;

const ContentText = styled.p`
  font-size: 17px;
  color: #333;
`;

const RecommendedInnerContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(254, 235, 0);
  padding: 16px;
  border-radius: 8px;
`;

const RecommendedContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px; // 좌우 마진 추가
`;

const RecommendedSubText = styled.p`
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 3px;
`;

const RecommendedText = styled.h6`
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: rgb(0, 0, 0);
`;

const CategoryGrid = styled(Grid)`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const RankingText = styled.h2`
  margin-top: 50px;
  color: rgb(0, 0, 0);
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const RankingContainer = styled(Container)`
  margin-bottom: 20px;
`;

export default MainPage;
