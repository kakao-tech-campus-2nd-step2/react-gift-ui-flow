import styled from "@emotion/styled"

import { DefaultGoodsItems } from "@/components/common/GoodsItem/Default";
import { Container } from "@/components/common/Layouts/Container/Container";
import Footer from "@/components/common/Layouts/Footer/Footer";
import { Grid } from "@/components/common/Layouts/Grid/Grid";
import Header from "@/components/common/Layouts/Header/Header";
import ThemeBanner from "@/components/theme/ThemeBanner";

const ThemePage: React.FC = () => {
  const defaultItem = {
    src:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨 + 크림치즈볼 + 콜라1.25L',
    amount: 29000,
  }

  const itemList = Array(21)
    .fill(defaultItem)
    .map((item, index) => ({ ...item, rankingIndex: index + 1 }));

  return (
    <Wrapper>
      <Header />
      <MainContent>
        <ThemeBanner themeKey="life_small_gift"/>
        <ContainerWrapper maxWidth="1024px">
          <Grid gap={20} columns={4}>
            {itemList.map((item, index) => (
              <DefaultGoodsItems
                key={index}
                imageSrc={item.src}
                subtitle={item.subtitle}
                title={item.title}
                amount={item.amount}
              />
            ))}
          </Grid>
        </ContainerWrapper>
      </MainContent>
      <Footer />
    </Wrapper>
  )
}

export default ThemePage

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding-bottom: 100px;
`;

const ContainerWrapper = styled(Container)`
  margin-bottom: 200px;
`;