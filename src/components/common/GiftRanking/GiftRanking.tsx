import styled from '@emotion/styled';
import React, { useState } from 'react';

const SectionWrapper = styled.section`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#007bff' : '#f8f9fa')};
  color: ${({ active }) => (active ? '#fff' : '#000')};
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? '#0056b3' : '#e2e6ea')};
  }
`;

const ItemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;

  img {
    border-radius: 10px;
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-bottom: 10px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const MoreButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const products = [
  { id: 1, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 2, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 3, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 4, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 5, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 6, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 7, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 8, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 9, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
  { id: 10, name: 'BBQ', description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
];

const GiftRanking: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [activeCategory, setActiveCategory] = useState('전체');
  const [activeFilter, setActiveFilter] = useState('받고 싶어한');

  const categories = ['전체', '여성이', '남성이', '청소년이'];
  const filters = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  const showMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const showLess = () => {
    setVisibleCount(6);
  };

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <SectionWrapper>
      <Title>실시간 급상승 선물랭킹</Title>
      <FilterWrapper>
        {categories.map((category) => (
          <FilterButton
            key={category}
            active={category === activeCategory}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterWrapper>
      <FilterWrapper>
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            active={filter === activeFilter}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterWrapper>
      <ItemGrid>
        {products.slice(0, visibleCount).map((product) => (
          <Item key={product.id}>
            <img src={`${process.env.PUBLIC_URL}/defaultImageNow.png`} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
          </Item>
        ))}
      </ItemGrid>
      <ButtonWrapper>
        {visibleCount < products.length ? (
          <MoreButton onClick={showMore}>더보기</MoreButton>
        ) : (
          <MoreButton onClick={showLess}>접기</MoreButton>
        )}
      </ButtonWrapper>
    </SectionWrapper>
  );
};

export default GiftRanking;
