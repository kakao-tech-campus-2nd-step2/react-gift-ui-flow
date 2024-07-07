import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Button } from '@/components/common/Button';
import { GoodsRankingFilter } from '@/components/common/GoodsRankingFilter';
import { breakpoints } from '@/styles/variants';
import { categories } from './data/categoriesData';
import { gifts } from './data/giftsData';

type RankingFilterOption = {
  targetType: 'ALL' | 'FEMALE' | 'MALE' | 'TEEN';
  rankType: 'MANY_WISH' | 'MANY_RECEIVE' | 'MANY_WISH_RECEIVE';
};

const Main: React.FC = () => {
  const [visibleGifts, setVisibleGifts] = useState(6);
  const [filterOption, setFilterOption] = useState<RankingFilterOption>({
    targetType: 'ALL',
    rankType: 'MANY_WISH',
  });

  const showMoreGifts = () => {
    setVisibleGifts((prev) => prev + 6);
  };

  const showLessGifts = () => {
    setVisibleGifts(6);
  };

  const filteredGifts = gifts.filter((_gift) => {
    // 필터 로직 틀만 추가 
    return true; // 임시로 전체 표시해둠
  });

  return (
    <Container>
      <StyledH1>
        <img src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png" alt="choonsik_hello" />
        선물 받을 친구를 선택해주세요.
      </StyledH1>
      <Grid columns={4} gap={16}>
        {categories.map((category) => (
          <Link key={category.key} to={`/theme/${category.key}`} style={{ textDecoration: 'none' }}>
            <CategoryButton>
              <CategoryImage src={category.imageSrc} alt={category.label} />
              <CategoryLabel>{category.label}</CategoryLabel>
            </CategoryButton>
          </Link>
        ))}
      </Grid>
      <StyledH2>
        <StyledBanner>
           <StyledLabel>AI가 추천하는 선물</StyledLabel>
           <StyledTitle>선물을 추천받고 싶은 친구를 선택해주세요.</StyledTitle>
        </StyledBanner>
        <h2>실시간 급상승 선물랭킹</h2>
      </StyledH2>
      <GoodsRankingFilter filterOption={filterOption} onFilterOptionChange={setFilterOption} />
      <Grid columns={3} gap={16}>
        {filteredGifts.slice(0, visibleGifts).map((gift) => (
          <RankingGoodsItems key={gift.rankingIndex} {...gift} />
        ))}
      </Grid>
      {visibleGifts < gifts.length && (
        <Button theme="outline" onClick={showMoreGifts}>
          더보기
        </Button>
      )}
      {visibleGifts >= gifts.length && (
        <Button theme="outline" onClick={showLessGifts}>
          접기
        </Button>
      )}
    </Container>
  );
};

const StyledH1 = styled.h1`
  background-color: #fafafa;
  color: #333333;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 18px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box; 

  img {
    width: 40px;
    height: 40px;
    border-radius: 16px;
    cursor: pointer;
    object-position: center center;
    margin-right: 10px;
  }
`;

const StyledH2 = styled.h2`
  
  margin: 20px 10px;
  border-radius: 8px;
  span {
    font-size: 13px;
    margin-left: 10px;
  }
  h2 {
  margin-top: 20px;
  text-align: center;
  }
`;

const CategoryButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 13px 0 12px;
  border-radius: 18px;
  background-color: #ffffff;
  text-align: center;
  textDecoration: none;
`;

const CategoryImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 18px;
`;

const CategoryLabel = styled.span`
  padding-top: 5px;
  font-size: 13px;
  line-height: 17px;
  color: #333;
  
`;

const StyledBanner = styled.div`
  width: 80%;
  padding: 16px;
  background-color: #feeb00;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  overflow-x: hidden;
`;

const StyledLabel = styled.span`
  display: block;
  font-size: 13px;
  line-height: 15px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.4);
  margin-bottom: 3px;

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 17px;
    margin-bottom: 5px;
  }
`;

const StyledTitle = styled.span`
  display: block;
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  color: #000;

  @media screen and (min-width: ${breakpoints.sm}) {
    font-size: 18px;
  }
`;

export default Main;
