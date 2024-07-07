import styled from '@emotion/styled';
import GoodsItem from '@components/GoodsItem/GoodsItem';
import { useState } from 'react';

const GoodsImageLink = "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg";

const items = Array.from({ length: 21 }, (_, index) => ({
  id: index + 1,
  corp: 'BBQ',
  name: `BBQ 양념치킨+크림치즈볼+콜라1.25L`,
  price: 29000,
  image: GoodsImageLink,
}));

const ItemList = () => {
  const [showMore] = useState(false);
  const displayedItems = showMore ? items : items.slice(0, 4);

  return (
    <Container>
      <ItemsContainer>
      {displayedItems.map(item => (
        <GoodsItem
          key={item.id}
          subtitle={item.corp}
          title={item.name}
          imageSrc={item.image}
          amount={item.price}
        />
      ))}
    </ItemsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export default ItemList;