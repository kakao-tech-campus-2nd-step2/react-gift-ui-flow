import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
    { key: 'birthday', label: '생일' },
    { key: 'graduation', label: '졸업선물' },
    { key: 'luxury', label: '스몰럭셔리' },
    { key: 'premium', label: '명품선물' },
    { key: 'housewarming', label: '결혼/집들이' },
    { key: 'warm', label: '따뜻한선물' },
    { key: 'light', label: '가벼운선물' },
    { key: 'fans', label: '팬심저격' },
    { key: 'voucher', label: '교환권' },
    { key: 'health', label: '건강/비타민' },
    { key: 'fruits', label: '과일/한우' },
    { key: 'baby', label: '출산/키즈' }
];

const CategoryList: React.FC = () => (
    <CategorySection>
        <CategoryTitle>카테고리</CategoryTitle>
        <CategoryListContainer>
            {categories.map((category, index) => (
                <Link to={`/theme/${category.key}`} key={index}>
                    <CategoryItem>
                        <CategoryImage src="https://img1.daumcdn.net/thumb/S104x104/?fname=https://t1.kakaocdn.net/gift/home/theme/292020231106_MXMUB.png" alt={category.label} />
                        <CategoryLabel>{category.label}</CategoryLabel>
                    </CategoryItem>
                </Link>
            ))}
        </CategoryListContainer>
    </CategorySection>
);

export default CategoryList;

const CategorySection = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #fff;
`;

const CategoryTitle = styled.h3`
    font-size: 18px;
    color: #000;
    margin-bottom: 20px;
    text-align: center;
`;

const CategoryListContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

const CategoryItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
`;

const CategoryImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 50%;
`;

const CategoryLabel = styled.span`
    margin-top: 10px;
    font-size: 14px;
    color: #000;
    text-align: center;
`;
