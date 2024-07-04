import styled from '@emotion/styled';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import ThemeHeader from '@/components/ThemeComponents/ThemeHeader';
import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Grid } from '@/components/common/layouts/Grid';
import { Container } from '@/components/common/layouts/Container';

// type ThemeKey = 'life_small_gift' | 'small_luxury';

export default function ThemePage() {
  const baseItem = {
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  };

  const items = Array(21)
    .fill(baseItem)
    .map((item, index) => ({ ...item, rankingIndex: index + 1 }));

  return (
    <PageWrapper>
      <Header></Header>
      <MainContent>
        <ThemeHeader themeKey="life_small_gift" />
        <Container maxWidth="1024px">
          <Grid gap={20} columns={4}>
            {items.map((item, index) => (
              <DefaultGoodsItems
                key={index}
                imageSrc={item.imageSrc}
                subtitle={item.subtitle}
                title={item.title}
                amount={item.amount}
              />
            ))}
          </Grid>
        </Container>
      </MainContent>
      <Footer></Footer>
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding-bottom: 100px;
`;
