import styled from '@emotion/styled';
import { useState } from 'react';

import { Button } from '../common/Button';
import { RankingGoodsItems } from '../common/GoodsItem/Ranking';
import { Container } from '../common/layouts/Container';
import { Grid } from '../common/layouts/Grid';

const Wrapper = styled.div`
  padding: 20px 0 80px 0;
  max-width: 100%;
`;

const GridContainer = styled(Grid)`
  max-width: 100%;
  width: 100%;
`;

const sampleItem = {
  rankingIndex: 1,
  imageSrc:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  subtitle: 'BBQ',
  title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  amount: 29000,
};

const TrendGiftRankingGrid = ({ visibleItems }: { visibleItems: number }) => {
  const rankingItems = Array.from({ length: 21 }, (_, index) => ({
    ...sampleItem,
    rankingIndex: index + 1,
  }));

  return (
    <GridContainer columns={6} gap={16}>
      {rankingItems.slice(0, visibleItems).map((item) => (
        <RankingGoodsItems
          rankingIndex={item.rankingIndex}
          imageSrc={item.imageSrc}
          subtitle={item.subtitle}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </GridContainer>
  );
};

const ToggleButton = styled(Button)`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 4px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  height: 40px;
  font-size: 15px;
  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
  background-color: white;

  &:hover {
    background-color: rgb(248, 248, 248);
  }
`;

export const TrendGiftRankings = () => {
  const [visibleItems, setVisibleItems] = useState(6);

  const handleShowMore = () => {
    setVisibleItems(21);
  };

  const handleShowLess = () => {
    setVisibleItems(6);
  };

  return (
    <Container>
      <Wrapper>
        <TrendGiftRankingGrid visibleItems={visibleItems} />
        {visibleItems === 6 ? (
          <ToggleButton onClick={handleShowMore}>더보기</ToggleButton>
        ) : (
          <ToggleButton onClick={handleShowLess}>접기</ToggleButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default TrendGiftRankings;
