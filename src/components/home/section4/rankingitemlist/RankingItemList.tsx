import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import RankingItem from './RankingItem';

const ItemListContainer = styled.div`
  width: 100%;
  padding: 40px 0px 60px;
`;

const GridContainer = styled.div`
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
  display: grid;
  gap: 16px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const PlusBtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 30px;

  button {
    max-width: 480px;
    height: 60px;
    font-size: 16px;
    width: 100%;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background-color 200ms ease 0s;
    box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
    color: rgb(17, 17, 17);
    &:hover {
      background-color: rgb(248, 248, 248);
    }

    @media (max-width: 768px) {
      height: 40px;
      font-size: 15px;
    }
  }
`;

const ItemIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

const RankingItemList = () => {
  const [showItem, setShowItem] = useState(false);
  const [ItemList, setItemList] = useState(ItemIndex.slice(0, 6));

  const onClickShowItem = () => {
    setShowItem(!showItem);
  };

  useEffect(() => {
    setItemList(showItem ? ItemIndex : ItemIndex.slice(0, 6));
  }, [showItem]);

  return (
    <ItemListContainer>
      <GridContainer>
        {ItemList.map((index) => (
          <RankingItem key={index} index={index} showSpan={true} />
        ))}
      </GridContainer>
      <PlusBtnContainer>
        <button onClick={onClickShowItem}>{showItem ? '접기' : '더보기'}</button>
      </PlusBtnContainer>
    </ItemListContainer>
  );
};

export default RankingItemList;
