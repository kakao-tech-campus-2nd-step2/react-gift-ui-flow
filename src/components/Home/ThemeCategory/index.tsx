import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { ThemeCategoryItem } from './ThemeCategortItem';

import { Container } from '@/components/common/Layout/Container';
import { Grid } from '@/components/common/Layout/Grid';

export const ThemeCategory = () => {
  return (
    <ThemeWrapper>
      <Container flexDirection="row" alignItems="center" justifyContent="center" maxWidth="1024px">
        <Grid columns={{ init: 4, xs: 4, lg: 6 }} gap={60}>
          <Link to="theme/theme_birth">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
              title="생일"
            />
          </Link>
          <Link to="theme/life_small_luxury">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292320240422_DTLQB.jpeg"
              title="스몰럭셔리"
            />
          </Link>
          <Link to="theme/life_luxury">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240319155927_65c43814a8a242c7a6004800c2b22f13.jpg"
              title="명품선물"
            />
          </Link>
          <Link to="theme/life_small_gift">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292120240418_VVXBZ.png"
              title="가벼운선물"
            />
          </Link>
          <Link to="theme/life_tea">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F313720240325_QDECC.png"
              title="시원한선물"
            />
          </Link>
          <Link to="theme/life_wedding">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F314220240418_PZTWI.png"
              title="결혼/집들이"
            />
          </Link>
          <Link to="theme/life_cheerup">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F306020231113_PMUJV.png"
              title="응원/시험"
            />
          </Link>
          <Link to="theme/life_fan">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F310220240703_MFNQR.jpg"
              title="팬심저격"
            />
          </Link>
          <Link to="theme/theme_ecoupon">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F293020240701_GMIDC.jpg"
              title="교환권"
            />
          </Link>
          <Link to="theme/life_health">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F334020240314_PHDHV.png"
              title="건강/비타민"
            />
          </Link>
          <Link to="theme/life_fruit">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2Fundefined20240521_HLCOF.jpeg"
              title="과일/한우"
            />
          </Link>
          <Link to="theme/life_pregnancy">
            <ThemeCategoryItem
              src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292620240701_WNPOU.png"
              title="출산/키즈"
            />
          </Link>
        </Grid>
      </Container>
    </ThemeWrapper>
  );
};

const ThemeWrapper = styled.div`
  width: 100%;
  padding: 40px 20px;
  padding-top: 70px;
`;
