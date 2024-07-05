import styled from '@emotion/styled';
import React, { useState } from 'react';

const categories = [
    { id: 'all', label: '전체', backgroundColor: '#4684E9', icon: 'ALL' },
    { id: 'women', label: '여성이', backgroundColor: '#E6F1FF', icon: '👩' },
    { id: 'men', label: '남성이', backgroundColor: '#E6F1FF', icon: '👨' },
    { id: 'teenagers', label: '청소년이', backgroundColor: '#E6F1FF', icon: '👶' },
];

const filters = [
    { id: 'wanted', label: '받고 싶어한' },
    { id: 'gifted', label: '많이 선물한' },
    { id: 'received', label: '위시로 받은' },
];

const TrendingGifts: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedFilter, setSelectedFilter] = useState('wanted');
    const [visibleProducts, setVisibleProducts] = useState(6);

    const handleCategoryClick = (id: string) => {
        setSelectedCategory(id);
    };

    const handleFilterClick = (id: string) => {
        setSelectedFilter(id);
    };

    const handleLoadMore = () => {
        setVisibleProducts(visibleProducts + 6);
    };

    const handleReset = () => {
        setVisibleProducts(6);
    };

    return (
        <TrendingGiftsContainer>
            <Title>실시간 급상승 선물랭킹</Title>
            <CategoryList>
                {categories.map((category) => (
                    <CategoryItem
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        selected={selectedCategory === category.id}
                        backgroundColor={category.backgroundColor}
                    >
                        <CategoryIcon>{category.icon}</CategoryIcon>
                        <CategoryLabel>{category.label}</CategoryLabel>
                    </CategoryItem>
                ))}
            </CategoryList>
            <FilterList>
                {filters.map((filter) => (
                    <FilterItem
                        key={filter.id}
                        onClick={() => handleFilterClick(filter.id)}
                        selected={selectedFilter === filter.id}
                    >
                        {filter.label}
                    </FilterItem>
                ))}
            </FilterList>
            <ProductList>
                {products.slice(0, visibleProducts).map((product, index) => (
                    <ProductCard key={index}>
                        <ProductImage src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg" alt={product.name} />
                        <ProductRank>{index + 1}</ProductRank>
                        <ProductInfo>
                            <Brand>{product.brand}</Brand>
                            <Name>{product.name}</Name>
                            <Price>{product.price}</Price>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductList>
            {visibleProducts < products.length && (
                <LoadMoreButton onClick={handleLoadMore}>더보기</LoadMoreButton>
            )}
            {visibleProducts > 6 && (
                <ResetButton onClick={handleReset}>접기</ResetButton>
            )}
        </TrendingGiftsContainer>
    );
};

export default TrendingGifts;

const products = [
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
];

const TrendingGiftsContainer = styled.div`
    padding: 20px;
    text-align: center;
`;

const Title = styled.h2`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const CategoryList = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
`;

const CategoryItem = styled.div<{ selected: boolean; backgroundColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-color: ${(props) => (props.selected ? '#4684E9' : props.backgroundColor)};
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

const CategoryIcon = styled.div`
    font-size: 24px;
`;

const CategoryLabel = styled.div`
    font-size: 14px;
    margin-top: 5px;
`;

const FilterList = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;
`;

const FilterItem = styled.div<{ selected: boolean }>`
    padding: 10px 20px;
    border-radius: 20px;
    background-color: ${(props) => (props.selected ? '#4684E9' : '#E6F1FF')};
    color: ${(props) => (props.selected ? '#fff' : '#000')};
    cursor: pointer;
`;

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

const ProductCard = styled.div`
    position: relative;
    width: 200px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    text-align: center;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
`;

const ProductRank = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #4684E9;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
`;

const ProductInfo = styled.div`
    padding: 10px;
`;

const Brand = styled.div`
    font-size: 14px;
    color: #757575;
`;

const Name = styled.div`
    font-size: 16px;
    margin: 5px 0;
`;

const Price = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const LoadMoreButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #4684E9;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const ResetButton = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #757575;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;
