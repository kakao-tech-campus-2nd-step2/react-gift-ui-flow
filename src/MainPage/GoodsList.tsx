import styled from '@emotion/styled';
import { useState } from 'react';

import { RankingGoodsItems } from '../components/common/GoodsItem/Ranking';

const GoodsList = () => {
  const items = [
    { key: 'item1', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item2', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item3', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item4', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item5', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item6', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item7', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item8', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item9', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item10', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item11', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item12', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item13', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item14', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item15', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item16', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item17', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item18', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item19', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item20', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
    { key: 'item21', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  ];

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
