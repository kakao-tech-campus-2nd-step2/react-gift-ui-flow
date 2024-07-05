import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Container } from '@/components/common/layouts/Container';
import HeaderSection from '@/Theme/HeaderSection';

const themeData: {
  [key: string]: { label: string; title: string; description: string; backgroundColor: string };
} = {
  life_small_gift: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#333',
  },
  // 다른 themeKey에 대한 데이터 추가
};

const baseProduct = {
  imageSrc: '/images/chicken.png',
  subtitle: 'BBQ',
  title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  amount: 29000,
};

const products = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  ...baseProduct,
  subtitle: 'BBQ',
}));

const ThemePage = () => {
  const { themeKey } = useParams<{ themeKey: string }>();
  const theme = themeKey && themeData[themeKey] ? themeData[themeKey] : themeData.life_small_gift;

  return (
    <PageWrapper>
      <HeaderSection
        label={theme.label}
        title={theme.title}
        description={theme.description}
        backgroundColor={theme.backgroundColor}
      />
      <Container>
        <List>
          {products.map((product) => (
            <DefaultGoodsItems
              key={product.id}
              imageSrc={product.imageSrc}
              subtitle={product.subtitle}
              title={product.title}
              amount={product.amount}
            />
          ))}
        </List>
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.section`
  padding: 0px;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-items: center;
`;

export default ThemePage;
