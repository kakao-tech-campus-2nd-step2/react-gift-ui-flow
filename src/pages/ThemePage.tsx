import styled from '@emotion/styled';

import Footer from '../components/common/Footer';
import { DefaultGoodsItems } from '../components/common/GoodsItem/Default';
import Header from '../components/common/Header';
import ThemeBanner from '../components/common/Theme/ThemeBanner';

const items = Array(20).fill({
  imageSrc:
    'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
  subtitle: 'BBQ',
  title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
  amount: 29000,
});

const ThemeContainer = styled.section`
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  margin-top: 54px;
`;

const ItemContainer = styled.section`
  margin: 30px auto;
  width: 90%;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

function ThemePage() {
  return (
    <ThemeContainer>
      <Header />
      <ThemeBanner />
      <ItemContainer>
        {items.map((item, index) => (
          <DefaultGoodsItems
            key={index}
            imageSrc={item.imageSrc}
            subtitle={item.subtitle}
            title={item.title}
            amount={item.amount}
          />
        ))}
      </ItemContainer>
      <Footer />
    </ThemeContainer>
  );
}

export default ThemePage;
