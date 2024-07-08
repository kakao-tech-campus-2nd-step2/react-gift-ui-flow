
import styled from '@emotion/styled';
import { useMemo, useState } from 'react';

import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/Layouts/Grid/Grid';

const GiftList = () => {
  const [showMore, setShowMore] = useState(false);

  const baseItem = useMemo(() => ({
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨 + 크림치즈볼 + 콜라1.25L',
    amount: 29000,
  }), []);

  const items = useMemo(() => Array(21)
    .fill(baseItem)
    .map((item, index) => ({ ...item, rankingIndex: index + 1 })), [baseItem]);

  const initialItems = useMemo(() => items.slice(0, 6), [items]);
  const moreItems = useMemo(() => items.slice(6, 21), [items]);

  const onMoreClick = () => {
    setShowMore(!showMore);
  };

  return (
    <Wrapper>
      <EmptyField />
      <Grid gap={25} columns={6}>
        {initialItems.map(({ imageSrc, subtitle, title, amount, rankingIndex }, index) => (
          <RankingGoodsItems
            key={index}
            rankingIndex={rankingIndex}
            imageSrc={imageSrc}
            subtitle={subtitle}
            title={title}
            amount={amount}
          />
        ))}
        {showMore &&
          moreItems.map(({ imageSrc, subtitle, title, amount, rankingIndex }, index) => (
            <RankingGoodsItems
              key={index + 6}
              imageSrc={imageSrc}
              subtitle={subtitle}
              title={title}
              amount={amount}
              rankingIndex={rankingIndex}
            />
          ))}
      </Grid>
      <MoreButtonWrapper>
        <MoreButton onClick={onMoreClick}>{showMore ? '접기' : '더보기'}</MoreButton>
      </MoreButtonWrapper>
    </Wrapper>
  );
};

export default GiftList;


const Wrapper = styled.div`
  max-width: 1024px;
  margin: auto;
  padding-bottom: 120px; 
  height: 100vh;
`;

const MoreButtonWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 400px;
`;

const MoreButton = styled.button`
  width: 100%;
  max-width: 480px;
  height: 60px;
  text-align: center;
  cursor: pointer;
  align-items: center;
  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
  color: rgb(17, 17, 17);
  transition: background-color 200ms ease 0s;
  font-size: 16px;
  border-radius: 4px;
  display: flex;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

const EmptyField = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
`;