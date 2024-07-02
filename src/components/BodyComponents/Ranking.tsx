import styled from '@emotion/styled';
import React, { useState } from 'react';

const items = [
  { id: 1, name: '상품 1', category: '전체', gender: '여성', type: '받고 싶어한' },
  { id: 2, name: '상품 2', category: '전체', gender: '남성', type: '많이 선물한' },
  { id: 3, name: '상품 3', category: '전체', gender: '청소년', type: '위시로 받은' },
  { id: 4, name: '상품 4', category: '전체', gender: '여성', type: '많이 선물한' },
  { id: 5, name: '상품 5', category: '전체', gender: '남성', type: '받고 싶어한' },
  { id: 6, name: '상품 6', category: '전체', gender: '청소년', type: '많이 선물한' },
  { id: 7, name: '상품 7', category: '전체', gender: '여성', type: '위시로 받은' },
  { id: 8, name: '상품 8', category: '전체', gender: '남성', type: '받고 싶어한' },
  { id: 9, name: '상품 9', category: '전체', gender: '청소년', type: '많이 선물한' },
  { id: 10, name: '상품 10', category: '전체', gender: '여성', type: '위시로 받은' },
];

const Ranking: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(6);
  const [genderFilter, setGenderFilter] = useState('전체');
  const [typeFilter, setTypeFilter] = useState('전체');

  const filteredItems = items.filter(
    (item) =>
      (genderFilter === '전체' || item.gender === genderFilter) &&
      (typeFilter === '전체' || item.type === typeFilter),
  );

  const showMoreItems = () => {
    setVisibleItems(filteredItems.length);
  };

  const showLessItems = () => {
    setVisibleItems(6);
  };

  const handleGenderFilter = (filter: string) => {
    setGenderFilter(filter);
  };

  const handleTypeFilter = (filter: string) => {
    setTypeFilter(filter);
  };

  return (
    <RankingContainer>
      <Title>실시간 급상승 선물랭킹</Title>
      <Filters>
        <FilterGenderGroup>
          <ButtonContainer>
            <FilterButton
              onClick={() => handleGenderFilter('전체')}
              active={genderFilter === '전체'}
            >
              ALL
            </FilterButton>
            <Label onClick={() => handleGenderFilter('전체')} active={genderFilter === '전체'}>
              전체
            </Label>
          </ButtonContainer>
          <ButtonContainer>
            <FilterButton
              onClick={() => handleGenderFilter('여성')}
              active={genderFilter === '여성'}
            >
              👩🏻‍🦳
            </FilterButton>
            <Label onClick={() => handleGenderFilter('여성')} active={genderFilter === '여성'}>
              여성이
            </Label>
          </ButtonContainer>
          <ButtonContainer>
            <FilterButton
              onClick={() => handleGenderFilter('남성')}
              active={genderFilter === '남성'}
            >
              🧑🏻‍🦳
            </FilterButton>
            <Label onClick={() => handleGenderFilter('남성')} active={genderFilter === '남성'}>
              남성이
            </Label>
          </ButtonContainer>
          <ButtonContainer>
            <FilterButton
              onClick={() => handleGenderFilter('청소년')}
              active={genderFilter === '청소년'}
            >
              👦🏻
            </FilterButton>
            <Label onClick={() => handleGenderFilter('청소년')} active={genderFilter === '청소년'}>
              청소년이
            </Label>
          </ButtonContainer>
        </FilterGenderGroup>
        <FilterTypeGroup>
          <FilterTypeButton
            onClick={() => handleTypeFilter('받고 싶어한')}
            active={typeFilter === '받고 싶어한'}
          >
            받고 싶어한
          </FilterTypeButton>
          <FilterTypeButton
            onClick={() => handleTypeFilter('많이 선물한')}
            active={typeFilter === '많이 선물한'}
          >
            많이 선물한
          </FilterTypeButton>
          <FilterTypeButton
            onClick={() => handleTypeFilter('위시로 받은')}
            active={typeFilter === '위시로 받은'}
          >
            위시로 받은
          </FilterTypeButton>
        </FilterTypeGroup>
      </Filters>
      <ItemList>
        {filteredItems.slice(0, visibleItems).map((item) => (
          <Item key={item.id}>{item.name}</Item>
        ))}
      </ItemList>
      {visibleItems < filteredItems.length ? (
        <Button onClick={showMoreItems}>더보기</Button>
      ) : (
        visibleItems > 6 && <Button onClick={showLessItems}>접기</Button>
      )}
    </RankingContainer>
  );
};

const RankingContainer = styled.div`
  padding: 0px 16px 32px;
  margin-top: 40px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  color: #333;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 7px;
  justify-content: center;
  gap: 16px;
`;

const FilterGenderGroup = styled.div`
  justify-content: space-between;
  display: flex;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  justify-content: center;
`;

const Label = styled.div<{ active: boolean }>`
  text-align: center;
  padding: 5px 0px;
  font-size: 14px;
  line-height: 16px;
  color: ${({ active }) => (active ? '#4684e9' : '#666')};
  font-weight: ${({ active }) => (active ? 700 : 400)};
`;

const FilterButton = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ active }) => (active ? '#4684e9' : '#e6f1ff')};
  color: rgb(255, 255, 255);
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const FilterTypeGroup = styled.div`
  justify-content: center;
  display: flex;
  height: 44px;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(230, 241, 255);
  border-radius: 8px;
`;

const FilterTypeButton = styled.button<{ active: boolean }>`
  box-sizing: border-box;
  padding: 13px 20px;
  font-size: 16px;
  line-height: 16px;
  color: ${({ active }) => (active ? '#4684e9' : '#4684e9b3')};
  font-weight: ${({ active }) => (active ? 700 : 400)};

  &:focus {
    outline: none;
  }
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Item = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

export default Ranking;
