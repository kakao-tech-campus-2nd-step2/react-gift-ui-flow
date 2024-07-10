import styled from '@emotion/styled';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default'; // 임의의 경로로 수정해주세요.

import { Container } from '../common/layouts/Container';
import { Grid } from '../common/layouts/Grid';

const Wrapper = styled.div`
  padding: 20px 0 80px 0;
  max-width: 100%;
`;

const GridContainer = styled(Grid)`
  max-width: 100%;
  width: 100%;
`;

const sampleItem = {
  imageSrc:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  subtitle: 'BBQ',
  title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  amount: 29000,
};

const ThemeGiftGrid = () => {
  const GoodsItems = Array.from({ length: 21 }, (_, index) => ({
    ...sampleItem,
    goodsIndex: index + 1,
  }));

  return (
    <GridContainer columns={4} gap={16}>
      {GoodsItems.map((item) => (
        <DefaultGoodsItems
          key={item.goodsIndex}
          imageSrc={item.imageSrc}
          subtitle={item.subtitle}
          title={item.title}
          amount={item.amount}
        />
      ))}
    </GridContainer>
  );
};

export const ThemeGifts = () => {
  return (
    <Container>
      <Wrapper>
        <ThemeGiftGrid />
      </Wrapper>
    </Container>
  );
};

export default ThemeGifts;
