import styled from '@emotion/styled';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Container } from '@/components/common/layouts/Container/index';
import { Grid } from '@/components/common/layouts/Grid/index';

export const ThemePage: React.FC = () => {
  const ItemsData = [];

  for (let i = 1; i <= 21; i++) {
    ItemsData.push({
      imageSrc:
        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
      subtitle: 'BBQ',
      title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
      amount: 29000,
    });
  }

  return (
    <>
      <HeaderSection style={{ backgroundColor: 'black' }}>
        <HeaderContainer>
          <HeaderLabel>Label</HeaderLabel>
          <HeaderTitle>Title</HeaderTitle>
          <HeaderDescription>Description</HeaderDescription>
        </HeaderContainer>
      </HeaderSection>
      <ThemeSection>
        <Grid columns={{ sm: 2, lg: 4 }} gap={20}>
          {ItemsData.map((item, index) => (
            <DefaultGoodsItems key={index} {...item} />
          ))}
        </Grid>
      </ThemeSection>
    </>
  );
};

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  color: #fff;
`;

const HeaderContainer = styled(Container)``;

const HeaderLabel = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0 0 0;
`;

const HeaderDescription = styled.p`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.55);
  margin: 10px 0 0 0;
  white-space: pre-line;
`;

const ThemeSection = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
`;
