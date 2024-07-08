import styled from '@emotion/styled';
import { Grid } from '../components/common/layouts/Grid/index';
import { DefaultGoodsItems } from '../components/common/GoodsItem/Default';

const ThemePage = () => {
  interface Item {
    subtitle: string;
    title: string;
    imageSrc: string;
    amount: number;
  }
  const items: Item = {
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    amount: 29000,
  };

  const itemsArray = Array.from({ length: 21 }, () => items);

  return (
    <ThemePageContainer>
      <ThemePageTitleBox>
        <ThemePageTitleInner>
          <ThemeTitle>가벼운 선물</ThemeTitle>
          <h1>예산은 가볍게, 감동은 무겁게❤️</h1>
          <ThemeDescription>당신의 센스를 뽐내줄 부담 없는 선물</ThemeDescription>
        </ThemePageTitleInner>
      </ThemePageTitleBox>
      <ItemContainer>
        <Grid columns={4} gap={10}>
          {itemsArray.map((item) => (
            <DefaultGoodsItems
              subtitle={item.subtitle}
              title={item.title}
              imageSrc={item.imageSrc}
              amount={item.amount}
            />
          ))}
        </Grid>
      </ItemContainer>
    </ThemePageContainer>
  );
};

export default ThemePage;

const ThemePageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const ThemePageTitleBox = styled.section`
  width: 100%;
  padding: 50px 100px;
  background-color: rgb(75, 77, 80);
`;

const ThemePageTitleInner = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 30px;
    line-height: 40px;
    padding-top: 12px;
    font-weight: 700;
    color: rgb(255, 255, 255);
  }
`;

const ThemeTitle = styled.p`
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
`;

const ThemeDescription = styled.p`
  padding-top: 12px;
  font-size: 24px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.55);
`;

const ItemContainer = styled.section`
  padding: 40px 100px 360px;
`;
