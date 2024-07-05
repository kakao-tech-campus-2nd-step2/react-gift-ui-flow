import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

interface ThemeProps {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

export const Theme: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  // 임시 테마 목록 데이터
  const themeDetails: {
    [key: string]: ThemeProps;
  } = {
    default: {
      label: '가벼운 선물',
      title: '예산은 가볍게, 감동은 무겁게❤️',
      description: '당신의 센스를 뽐내줄 부담 없는 선물',
      backgroundColor: 'rgb(75, 77, 80)',
    },
  };

  const theme = themeDetails[themeKey || 'default'];

  // 임시 상품 목록 데이터
  const products = [
    { id: 1, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 2, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 3, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 4, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 5, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 6, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 7, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 8, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 9, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
    { id: 10, name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', category: 'BBQ', price: '29000' },
  ];

  return (
    <Container>
      <HeaderWrapper backgroundColor={theme.backgroundColor}>
        <Label>{theme.label}</Label>
        <Title>{theme.title}</Title>
        <Description>{theme.description}</Description>
      </HeaderWrapper>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <ProductImg
              src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
              alt="BBQ 양념치킨+크림치즈볼+콜라1.25L 소개"
            />
            <ProductCategory>{product.category}</ProductCategory>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductItem>
        ))}
      </ProductList>
    </Container>
  );
};

const Container = styled.div`
  /* 스타일링 */
`;

const HeaderWrapper = styled.div<{ backgroundColor: string }>`
  padding: 20px;
  background-color: ${(props) => props.backgroundColor};
`;

const Label = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0;
`;

const ProductList = styled.div``;

const ProductItem = styled.div``;

const ProductImg = styled.img``;

const ProductCategory = styled.div``;

const ProductName = styled.div``;

const ProductPrice = styled.div``;
