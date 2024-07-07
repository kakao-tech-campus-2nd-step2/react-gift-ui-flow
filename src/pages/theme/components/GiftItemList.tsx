import styled from '@emotion/styled';

import GiftImg from '@/assets/gitf_img.jpg';
import { Image } from '@/components/common/Image';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants';

const ImageBox = styled(Image)`
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${breakpoints.lg}) {
    width: 244px;
    height: 244px;
  }
`;

const GiftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GiftEx = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const GiftMainEx = styled.h3`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: rgb(51, 51, 51);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const GiftPriceEx = styled.p`
  padding-top: 8px;
  font-size: 20px;
  line-height: 30px;
  color: rgb(34, 34, 34);
  font-weight: 700;
  word-break: break-word;
`;

const GiftGridContainer = styled.section`
  width: calc(100% - 32px);
  padding: 40px 16px 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GiftGridWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: center;
`;

const ExWrapper = styled.div`
  width: 100%;
  padding-top: 12px;
`;

const GiftItemList = () => {
  const giftItems = Array.from({ length: 21 }, (_, index) => (
    <GiftContainer key={index}>
      <ImageBox src={GiftImg} alt="gift" ratio="square" radius={0} />
      <ExWrapper>
        <GiftEx>BBQ</GiftEx>
        <GiftMainEx>BBQ 양념치킨+크림치즈볼+콜라1.25L</GiftMainEx>
        <GiftPriceEx>29000원</GiftPriceEx>
      </ExWrapper>
    </GiftContainer>
  ));

  return (
    <GiftGridContainer>
      <GiftGridWrapper>
        <Grid
          columns={{
            initial: 2,
            xs: 2,
            sm: 2,
            md: 2,
            lg: 4,
          }}
          gap={16}
        >
          {giftItems}
        </Grid>
      </GiftGridWrapper>
    </GiftGridContainer>
  );
};

export default GiftItemList;
