/* eslint-disable @typescript-eslint/no-shadow */
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';

import { Button } from '@/components/common/Button';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Container } from '@/components/common/layouts/Container';

interface Product {
  id: number;
  category: string;
  type: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  amount: number;
}

const products: Product[] = [
  {
    id: 1,
    category: 'women',
    type: 'wanted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Delicious Chicken',
    amount: 29000,
  },
  {
    id: 2,
    category: 'men',
    type: 'gifted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Tasty Chicken',
    amount: 29000,
  },
  {
    id: 3,
    category: 'teens',
    type: 'wishlist',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Tasty Chicken',
    amount: 29000,
  },
  {
    id: 4,
    category: 'women',
    type: 'wanted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Delicious Chicken',
    amount: 29000,
  },
  {
    id: 5,
    category: 'men',
    type: 'gifted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Tasty Chicken',
    amount: 29000,
  },
  {
    id: 6,
    category: 'teens',
    type: 'wishlist',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Tasty Chicken',
    amount: 29000,
  },
  {
    id: 7,
    category: 'women',
    type: 'wanted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Delicious Chicken',
    amount: 29000,
  },
  {
    id: 8,
    category: 'men',
    type: 'gifted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Tasty Chicken',
    amount: 29000,
  },
  {
    id: 9,
    category: 'women',
    type: 'wanted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Delicious Chicken',
    amount: 29000,
  },
  {
    id: 10,
    category: 'women',
    type: 'wanted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Delicious Chicken',
    amount: 29000,
  },
  {
    id: 11,
    category: 'women',
    type: 'wanted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Delicious Chicken',
    amount: 29000,
  },
  {
    id: 12,
    category: 'women',
    type: 'wanted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Delicious Chicken',
    amount: 29000,
  },
  {
    id: 13,
    category: 'women',
    type: 'wanted',
    imageSrc: '/images/chicken.png',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    subtitle: 'Delicious Chicken',
    amount: 29000,
  },
];

const filterProducts = (products: Product[], category: string, type: string) => {
  return products.filter(
    (product) => (category === 'all' || product.category === category) && product.type === type,
  );
};

const ProductList = ({
  activeCategory,
  activeType,
}: {
  activeCategory: string;
  activeType: string;
}) => {
  const [visibleProducts, setVisibleProducts] = useState<number>(6);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(() =>
    filterProducts(products, activeCategory, activeType),
  );

  useEffect(() => {
    setFilteredProducts(filterProducts(products, activeCategory, activeType));
    setVisibleProducts(6); // 필터가 바뀔 때 처음 6개만 보이도록 설정
  }, [activeCategory, activeType]);

  const toggleVisibleProducts = () => {
    if (visibleProducts === 6) {
      setVisibleProducts(filteredProducts.length);
    } else {
      setVisibleProducts(6);
    }
  };

  return (
    <Container>
      <List>
        {filteredProducts.slice(0, visibleProducts).map((product, index) => (
          <RankingGoodsItems
            key={product.id}
            rankingIndex={index + 1}
            imageSrc={product.imageSrc}
            title={product.title}
            subtitle={product.subtitle}
            amount={product.amount}
          />
        ))}
      </List>
      <Button
        theme="outline"
        style={{ maxWidth: '480px', margin: '20px auto', display: 'block', outline: 'none' }}
        onClick={toggleVisibleProducts}
      >
        {visibleProducts === 6 ? '더보기' : '접기'}
      </Button>
    </Container>
  );
};

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
  justify-items: center;
`;

export default ProductList;
