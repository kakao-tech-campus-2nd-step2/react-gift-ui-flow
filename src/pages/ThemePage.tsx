import styled from '@emotion/styled';
import React from 'react';

import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const ThemePage: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      brand: 'BBQ',
      price: 29000,
      imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 2,
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      brand: 'BBQ',
      price: 29000,
      imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 3,
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      brand: 'BBQ',
      price: 29000,
      imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 4,
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      brand: 'BBQ',
      price: 29000,
      imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 5,
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      brand: 'BBQ',
      price: 29000,
      imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
    {
      id: 6,
      name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      brand: 'BBQ',
      price: 29000,
      imgSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    },
  ];

  return (
    <Container>
      <Header />
      <MainContent>
        <IntroSection>
          <Inner>
            <ThemeTitle>가벼운 선물</ThemeTitle>
            <ThemeDescription>예산은 가볍게, 감동은 무겁게❤️</ThemeDescription>
            <ThemeSubtitle>당신의 센스를 뽐내줄 부담 없는 선물</ThemeSubtitle>
          </Inner>
        </IntroSection>
        <ProductSection>
          <Inner>
            <ProductGrid>
              {products.map((product) => (
                <ProductCard key={product.id}>
                  <ProductImage src={product.imgSrc} alt={product.name} />
                  <ProductInfo>
                    <ProductBrand>{product.brand}</ProductBrand>
                    <ProductName>{product.name}</ProductName>
                    <ProductPrice>{product.price}원</ProductPrice>
                  </ProductInfo>
                </ProductCard>
              ))}
            </ProductGrid>
          </Inner>
        </ProductSection>
      </MainContent>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  flex: 1;
  width: 100%;
`;

const IntroSection = styled.section`
  height: 200px;
  padding: 40px 0;
  background-color: #4b4d50;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 64px auto;
  padding: 0 20px;
`;

const ThemeTitle = styled.p`
  font-size: 20px;
  color: #FFFFFFb3;
  margin: 12px;
  line-height: 24px;
  font-weight: 700;
`;

const ThemeDescription = styled.h1`
  font-size: 30px;
  color: #FFFFFF;
  margin: 12px;
  font-weight: 700;
`;

const ThemeSubtitle = styled.p`
  font-size: 24px;
  color: #FFFFFF8C;
  margin: 12px;
`;

const ProductSection = styled.section`
  padding: 40px 0;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const ProductInfo = styled.div`
  padding: 20px;
  text-align: center;
`;

const ProductBrand = styled.p`
  font-size: 14px;
  color: #999;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #000;
`;

const FooterContainer = styled.div`
  width: 100%;
`;

export default ThemePage;
