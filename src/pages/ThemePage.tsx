import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

const themeDetails: {
  [key: string]: { label: string; title: string; description: string; backgroundColor: string };
} = {
  birthday: {
    label: '생일',
    title: '생일 선물',
    description: '생일을 축하하는 선물',
    backgroundColor: '#ffeb3b',
  },
  graduation: {
    label: '졸업선물',
    title: '졸업 선물',
    description: '졸업을 축하하는 선물들',
    backgroundColor: '#4caf50',
  },
  smallLuxury: {
    label: '스몰럭셔리',
    title: '스몰럭셔리 선물',
    description: '작은 럭셔리 선물들',
    backgroundColor: '#ff9800',
  },
  luxury: {
    label: '명품선물',
    title: '명품 선물',
    description: '럭셔리한 명품 선물들',
    backgroundColor: '#e91e63',
  },
  wedding: {
    label: '결혼/집들이',
    title: '결혼/집들이 선물',
    description: '결혼과 집들이를 위한 선물들',
    backgroundColor: '#3f51b5',
  },
  warmGift: {
    label: '따뜻한선물',
    title: '따뜻한 선물',
    description: '따뜻한 선물들',
    backgroundColor: '#f44336',
  },
  lightGift: {
    label: '가벼운선물',
    title: '가벼운 선물',
    description: '저렴한 가벼운 선물들',
    backgroundColor: '#9c27b0',
  },
  fans: {
    label: '팬심저격',
    title: '팬심 저격 선물',
    description: '팬심을 저격하는 선물들',
    backgroundColor: '#00bcd4',
  },
  voucher: {
    label: '교환권',
    title: '교환권 선물',
    description: '교환권 선물들',
    backgroundColor: '#8bc34a',
  },
  health: {
    label: '건강/비타민',
    title: '건강/비타민 선물',
    description: '건강을 위한 선물들',
    backgroundColor: '#cddc39',
  },
  fruit: {
    label: '과일/한우',
    title: '과일/한우 선물',
    description: '과일과 한우 선물들',
    backgroundColor: '#ffeb3b',
  },
  baby: {
    label: '출산/키즈',
    title: '출산/키즈 선물',
    description: '출산/키즈를 위한 선물들',
    backgroundColor: '#ffc107',
  },
};

const ThemeContainer = styled.div`
  padding: 20px;
`;

const ThemeHeader = styled.div`
  margin-bottom: 20px;
`;

const ThemeTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ThemeDescription = styled.p`
  font-size: 16px;
  color: #555;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductName = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductDescription = styled.p`
  font-size: 14px;
  color: #555;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();
  const theme = themeDetails[themeKey || 'birthday'];

  const products = [
    {
      id: 1,
      name: 'BBQ',
      description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29000원',
      image: '/defaultImageNow.png',
    },
    {
      id: 2,
      name: 'BBQ',
      description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29000원',
      image: '/defaultImageNow.png',
    },
    {
      id: 3,
      name: 'BBQ',
      description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29000원',
      image: '/defaultImageNow.png',
    },
    {
      id: 4,
      name: 'BBQ',
      description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29000원',
      image: '/defaultImageNow.png',
    },
    {
      id: 5,
      name: 'BBQ',
      description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29000원',
      image: '/defaultImageNow.png',
    },
    {
      id: 6,
      name: 'BBQ',
      description: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      price: '29000원',
      image: '/defaultImageNow.png',
    },
  ];

  return (
    <ThemeContainer>
      <ThemeHeader>
        <ThemeTitle>{theme.title}</ThemeTitle>
        <ThemeDescription>{theme.description}</ThemeDescription>
      </ThemeHeader>
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductGrid>
    </ThemeContainer>
  );
};

export default ThemePage;
