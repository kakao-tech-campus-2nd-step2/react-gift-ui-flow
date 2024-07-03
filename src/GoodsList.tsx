import styled from '@emotion/styled';
import { useState } from 'react';

const GoodsItem = ({ name, ranking }: { name: string; ranking: number }) => (
  <div>
    <p>{name}</p>
    <p>Ranking: {ranking}</p>
  </div>
);

const GoodsList = () => {
  const goodsData = [
    { id: 1, name: '상품1', ranking: 1 },
    { id: 2, name: '상품2', ranking: 2 },
    { id: 3, name: '상품3', ranking: 3 },
    { id: 4, name: '상품4', ranking: 4 },
    { id: 5, name: '상품5', ranking: 5 },
    { id: 6, name: '상품6', ranking: 6 },
    { id: 7, name: '상품7', ranking: 7 },
    { id: 8, name: '상품8', ranking: 8 },
    { id: 9, name: '상품9', ranking: 9 },
    { id: 10, name: '상품10', ranking: 10 },
  ];

  const [showMore, setShowMore] = useState(false);
  const initialItemCount = 6;
  const visibleItemCount = showMore ? goodsData.length : initialItemCount;

  const toggleShowMore = () => {
    setShowMore(prevState => !prevState);
  };

  return (
    <div>
      {goodsData.slice(0, visibleItemCount).map(item => (
        <GoodsItem key={item.id} name={item.name} ranking={item.ranking} />
      ))}
      <Button onClick={toggleShowMore}>
        {showMore ? '접기' : '더보기'}
      </Button>
    </div>
  );
};

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #fff;
  color: #333;
  border: 2px solid;
  border-color: #eee;
  cursor: pointer;
`;

export default GoodsList;
