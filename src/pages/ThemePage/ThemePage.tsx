import React from 'react';
import { useLocation } from 'react-router-dom';
import Container from '@components/Layout/Container';
import {
  HeaderSection,
  HeaderLabel,
  HeaderTitle,
  HeaderDescription,
  ItemListSection,
} from '@pages/ThemePage/ThemePage.styles';
import Grid from '@components/Layout/Grid';
import DefaultGoodsItem from '@components/GoodsItem/DefaultGoodsItem';

const items = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  imageSrc:
    'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240129103642_a5ca62d182ec419285ba708b51cb72c2.jpg',
  subtitle: '푸드장',
  title: '[단독]푸드장 프리미엄 구이 선물세트1.15kg',
  amount: 49900,
}));

const ThemePage = () => {
  const location = useLocation();

  return (
    <>
      <HeaderSection backgroundColor={location.state?.backgroundColor}>
        <Container width="100%" justifyContent="center" alignItems="center">
          <Container width="100%" maxWidth="1024px" flexDirection="column">
            <HeaderLabel>{location.state?.label}</HeaderLabel>
            <HeaderTitle>{location.state?.title}</HeaderTitle>
            <HeaderDescription>{location.state?.description}</HeaderDescription>
          </Container>
        </Container>
      </HeaderSection>
      <ItemListSection>
        <Container width="100%" justifyContent="center" alignItems="center">
          <Container width="100%" maxWidth="1024px" flexDirection="column">
            <Grid columns={4} gap={16}>
              {items.map((item) => (
                <DefaultGoodsItem
                  key={item.id}
                  imageSrc={item.imageSrc}
                  subtitle={item.subtitle}
                  title={item.title}
                  amount={item.amount}
                />
              ))}
            </Grid>
          </Container>
        </Container>
      </ItemListSection>
    </>
  );
};

export default ThemePage;
