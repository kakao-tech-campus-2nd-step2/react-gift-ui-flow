import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

import GiftImg from '@/assets/giftlist.jpeg';
import { Image } from '@/components/common/Image';
import { Grid } from '@/components/common/layouts/Grid';
import { breakpoints } from '@/styles/variants/index';

const GiftLayout = styled.div`
  width: calc(100% - 28px);
  display: flex;
  justify-content: center;
  padding: 14px 14px 3px;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: calc(100% - 104px);

    padding: 45px 52px 23px;
  }
`;

const GiftWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
`;

const ImageBox = styled(Image)`
  width: 50px;
  height: 50px;

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 90px;
    height: 90px;
  }
`;

const GiftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 13px 0px 12px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 25px 35px 24px;
  }
`;

const GiftEx = styled.p`
  color: rgb(51, 51, 51);
  font-size: 13px;
  line-height: 17px;
  margin: 5px 0px 0px;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 7px 0px 0px;
    font-size: 16px;
    line-height: 28px;
  }
`;

const giftItems = [
  { text: '생일' },
  { text: '졸업선물' },
  { text: '스몰럭셔리' },
  { text: '명품선물' },
  { text: '결혼/집들이' },
  { text: '따뜻한선물' },
  { text: '가벼운선물' },
  { text: '팬심저격' },
  { text: '교환권' },
  { text: '건강/비타민' },
  { text: '과일/한우' },
  { text: '출산/키즈' },
];

const GiftList = () => {
  return (
    <GiftLayout>
      <GiftWrapper>
        <Grid
          columns={{
            initial: 4,
            xs: 4,
            sm: 4,
            md: 4,
            lg: 6,
          }}
          gap={0}
        >
          {giftItems.map((item, index) => (
            <NavLink key={index} to="/theme/life_small_gift">
              <GiftContainer>
                <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
                <GiftEx>{item.text}</GiftEx>
              </GiftContainer>
            </NavLink>
          ))}
        </Grid>
      </GiftWrapper>
    </GiftLayout>
  );
};

export default GiftList;
