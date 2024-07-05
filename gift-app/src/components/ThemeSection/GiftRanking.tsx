import styled from '@emotion/styled';
import GoodsItem from '@components/GoodsItem/GoodsItem';
import Button from '@components/Button/Button';
import useFilter from 'hooks/useFilter';
import { useState } from 'react';

const GiftRanking = () => {
  const GoodsImageLink = "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg";

  // 21개의 상품을 생성
  const items = Array.from({ length: 21 }, (_, index) => ({
    id: index + 1,
    rank: index + 1,
    corp: 'BBQ',
    name: `BBQ 양념치킨+크림치즈볼+콜라1.25L`,
    price: 29000,
    image: GoodsImageLink,
  }));

  const { filter, setFilter, subFilter, setSubFilter, filterItems } = useFilter(items);
  const [showMore, setShowMore] = useState(false);

  const displayedItems = showMore ? filterItems() : filterItems().slice(0, 6);

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
      <ButtonContainer>
        <MoreButton onClick={() => setShowMore(!showMore)}>
          {showMore ? '접기' : '더보기'}
        </MoreButton>
      </ButtonContainer>
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

const StyledButton = styled(Button)<{ active?: boolean }>`
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

const SubFilterButton = styled(Button)<{ active?: boolean }>`
  background-color: transparent;
  color: ${({ active }) => (active ? '#007aff' : '#333')};
  cursor: pointer;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const MoreButton = styled.button`
  width: 400px; 
  height: 35px; 
  border: 1px solid #ccc; 
  border-radius: 5px; 
  background-color: #fff; 
  color: #333; 
  cursor: pointer;
  font-size: 16px; 

  &:hover {
    background-color: #f9f9f9;
  }
`;

export default GiftRanking;