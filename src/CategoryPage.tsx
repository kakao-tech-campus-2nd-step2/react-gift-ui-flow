import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

const CategoryPage: React.FC = () => {
    const { themeKey } = useParams<{ themeKey: string }>();

    return (
        <CategoryContainer>
            <Banner>
                <BannerTitle>{themeKey}</BannerTitle>
                <BannerSubtitle>예산은 가볍게, 감동은 무겁게 <span role="img" aria-label="heart">❤️</span></BannerSubtitle>
                <BannerDescription>당신의 센스를 뽐내줄 부담 없는 선물</BannerDescription>
            </Banner>
            <ProductList>
                {products.map((product, index) => (
                    <ProductCard key={index}>
                        <ProductImage src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg" alt={product.name} />
                        <ProductInfo>
                            <Brand>{product.brand}</Brand>
                            <Name>{product.name}</Name>
                            <Price>{product.price}</Price>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductList>
        </CategoryContainer>
    );
};

export default CategoryPage;

const products = [
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' },
    { brand: 'BBQ', name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', price: '29000원' }
];

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Banner = styled.div`
    width: 100%;
    background-color: #4a4a4a;
    color: #fff;
    padding: 40px 20px;
    text-align: center;
`;

const BannerTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 10px;
`;

const BannerSubtitle = styled.h1`
    font-size: 32px;
    margin-bottom: 10px;
    font-weight: bold;
`;

const BannerDescription = styled.p`
    font-size: 18px;
`;

const ProductList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;

const ProductCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 220px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
`;

const ProductImage = styled.img`
    width: 100%;
    height: auto;
`;

const ProductInfo = styled.div`
    padding: 10px;
    text-align: center;
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
