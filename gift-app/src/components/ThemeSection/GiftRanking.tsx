import { useState } from 'react';
import styled from '@emotion/styled';
import GoodsItem from '@components/GoodsItem/GoodsItem';
import Button, { ButtonProps } from '@components/Button/Button'; // ButtonProps 가져오기

interface StyledButtonProps extends ButtonProps {
  active?: boolean;
}

const GiftRanking = () => {
  const [filter, setFilter] = useState('all');
  const [subFilter, setSubFilter] = useState('받고 싶어한');
  const [showMore, setShowMore] = useState(false);
  const GoodsImageLink = "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg";

  const items = [
    { id: 1, rank: 1, corp: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: 29000, image: GoodsImageLink },
    { id: 2, rank: 2, corp: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: 29000, image: GoodsImageLink },
    { id: 3, rank: 3, corp: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: 29000, image: GoodsImageLink },
    { id: 4, rank: 4, corp: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: 29000, image: GoodsImageLink },
    { id: 5, rank: 5, corp: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: 29000, image: GoodsImageLink },
    { id: 6, rank: 6, corp: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: 29000, image: GoodsImageLink },
  ];

  const displayedItems = showMore ? items : items.slice(0, 6);

  return (
    <RankingContainer>
      <Title>실시간 급상승 선물랭킹</Title>
      <FilterContainer>
        <FilterButtonWrapper>
          <StyledButton onClick={() => setFilter('all')} active={filter === 'all'}>
            <FilterIcon>ALL</FilterIcon>
          </StyledButton>
          <FilterText active={filter === 'all'}>전체</FilterText>
        </FilterButtonWrapper>
        <FilterButtonWrapper>
          <StyledButton onClick={() => setFilter('female')} active={filter === 'female'}>
            <FilterIcon>👩</FilterIcon>
          </StyledButton>
          <FilterText active={filter === 'female'}>여성이</FilterText>
        </FilterButtonWrapper>
        <FilterButtonWrapper>
          <StyledButton onClick={() => setFilter('male')} active={filter === 'male'}>
            <FilterIcon>👨</FilterIcon>
          </StyledButton>
          <FilterText active={filter === 'male'}>남성이</FilterText>
        </FilterButtonWrapper>
        <FilterButtonWrapper>
          <StyledButton onClick={() => setFilter('teen')} active={filter === 'teen'}>
            <FilterIcon>🧑</FilterIcon>
          </StyledButton>
          <FilterText active={filter === 'teen'}>청소년이</FilterText>
        </FilterButtonWrapper>
      </FilterContainer>
      <SubFilterContainer>
        <SubFilterButton onClick={() => setSubFilter('받고 싶어한')} active={subFilter === '받고 싶어한'}>받고 싶어한</SubFilterButton>
        <SubFilterButton onClick={() => setSubFilter('많이 선물한')} active={subFilter === '많이 선물한'}>많이 선물한</SubFilterButton>
        <SubFilterButton onClick={() => setSubFilter('위시로 받은')} active={subFilter === '위시로 받은'}>위시로 받은</SubFilterButton>
      </SubFilterContainer>
      <ItemsContainer>
        {displayedItems.map(item => (
          <GoodsItem
            key={item.id}
            subtitle={item.corp}
            title={item.name}
            imageSrc={item.image}
            amount={item.price}
            rankingIndex={item.rank}
          />
        ))}
      </ItemsContainer>
    </RankingContainer>
  );
};

const RankingContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-bottom: 20px;
  justify-content: center;
`;

const FilterButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledButton = styled(Button)<StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? '#007aff' : '#e0f7fa')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  cursor: pointer;
`;

const FilterIcon = styled.span`
  font-size: 14px;
`;

const FilterText = styled.span<{ active: boolean }>`
  font-size: 14px;
  margin-top: 5px;
  color: ${({ active }) => (active ? '#007aff' : '#333')};
`;

const SubFilterContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  background-color: #e0f7fa;
  padding: 10px;
  border-radius: 10px;
  justify-content: center;
`;

const SubFilterButton = styled(Button)<StyledButtonProps>`
  background-color: transparent;
  color: ${({ active }) => (active ? '#007aff' : '#333')};
  cursor: pointer;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export default GiftRanking;