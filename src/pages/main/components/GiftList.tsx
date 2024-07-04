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
  padding: 7px 0px 0px;
`;

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
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>생일</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>졸업선물</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>스몰럭셔리</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>명품선물</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>결혼/집들이</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>따뜻한선물</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>가벼운선물</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>팬심저격</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>교환권</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>건강/비타민</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>과일/한우</GiftEx>
            </GiftContainer>
          </NavLink>
          <NavLink to="/theme/life_small_gift">
            <GiftContainer>
              <ImageBox src={GiftImg} alt="bar" ratio="square" radius={16} />
              <GiftEx>출산/키즈</GiftEx>
            </GiftContainer>
          </NavLink>
        </Grid>
      </GiftWrapper>
    </GiftLayout>
  );
};

export default GiftList;
