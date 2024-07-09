import { Grid } from '@/components/common/layouts/Grid';
import { BodyWrapper, ChildColumnCenter, ItemWrapper } from '@/pages/MainPage';
import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import GiftHeader from '@/components/Gift/GiftHeader';

const GiftDetailPage = () => {
  return (
    <BodyWrapper>
      <GiftHeader />
      <ChildColumnCenter>
        <Grid columns={{ initial: 2, md: 3, lg: 4 }} gap={10}>
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
      </ChildColumnCenter>
    </BodyWrapper>
  );
};

export default GiftDetailPage;
