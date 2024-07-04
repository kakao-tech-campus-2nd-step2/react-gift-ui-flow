import styled from '@emotion/styled';
import { Grid } from '@/components/common/layouts/Grid';
import { BodyWrapper, Child, ItemWrapper } from '@/pages/MainPage';
import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';

// Title은 flex-direction: row;를 가지고 있습니다.
const Title = styled.div`
  display: flex; /* Flexbox를 활성화 */
  flex-direction: column; /* 자식 요소들을 가로 방향으로 배치 */
  gap: 30px; /* 자식 요소들 사이에 30px 간격을 줌 */
  background-color: rgb(75, 77, 80);
  width: 100%;
  padding: 20px;
`;
const H1 = styled.h1`
  color: white; /* h1의 색상 설정 */
  font-weight: 700;
`;

const H2 = styled.h2`
  color: rgba(255, 255, 255, 0.55); /* h2의 색상 설정 */
  font-weight: 700;
`;

const H3 = styled.h3`
  color: rgba(255, 255, 255, 0.55); /* h3의 색상 설정 */
  font-weight: 700;
`;

const Gift = () => {
  return (
    <BodyWrapper>
      <Title>
        <H3>가벼운 선물</H3>
        <H1>예산은 가볍게, 감동은 무겁게</H1>
        <H2>당신의 센스를 뽐내줄 부담없는 선물</H2>
      </Title>
      <Child>
        <Grid columns={{ sm: 2, md: 3, lg: 4 }} gap={10}>
          <ItemWrapper>
            <DefaultGoodsItems
              imageSrc="/images/gift.jpg"
              subtitle="BBQ"
              title="BBQ 양념치킨"
              amount={29000}
            ></DefaultGoodsItems>
          </ItemWrapper>
          <ItemWrapper>
            <DefaultGoodsItems
              imageSrc="/images/gift.jpg"
              subtitle="BBQ"
              title="BBQ 양념치킨"
              amount={29000}
            ></DefaultGoodsItems>
          </ItemWrapper>
          <ItemWrapper>
            <DefaultGoodsItems
              imageSrc="/images/gift.jpg"
              subtitle="BBQ"
              title="BBQ 양념치킨"
              amount={29000}
            ></DefaultGoodsItems>
          </ItemWrapper>
          <ItemWrapper>
            <DefaultGoodsItems
              imageSrc="/images/gift.jpg"
              subtitle="BBQ"
              title="BBQ 양념치킨"
              amount={29000}
            ></DefaultGoodsItems>
          </ItemWrapper>
          <ItemWrapper>
            <DefaultGoodsItems
              imageSrc="/images/gift.jpg"
              subtitle="BBQ"
              title="BBQ 양념치킨"
              amount={29000}
            ></DefaultGoodsItems>
          </ItemWrapper>
        </Grid>
      </Child>
    </BodyWrapper>
  );
};

export default Gift;
