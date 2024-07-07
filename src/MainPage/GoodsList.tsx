import styled from '@emotion/styled';
import { useState } from 'react';

import { RankingGoodsItems } from '../components/common/GoodsItem/Ranking';
import items from '../themeItems';

const GoodsList = () => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMoreClick = () => {
    setShowMore(!showMore);
  };

  const displayedItems = showMore ? items : items.slice(0, 6);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 30px;
`;

const ShowMoreButton = styled.button`
  margin-top: 20px;
  padding: 10px 230px;
  background-color: #fff;
  color: #333;
  border: #eee solid;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
`;

  return (
    <Container>
       <Grid>
        {displayedItems.map((item, index) => (
          <RankingGoodsItems
            key={item.key}
            rankingIndex={index + 1}
            imageSrc={item.imageSrc}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </Grid>
      <ShowMoreButton onClick={handleShowMoreClick}>
        {showMore ? '접기' : '더보기'}
      </ShowMoreButton>
    </Container>
  );
};

export default GoodsList;
