import styled from '@emotion/styled';

import { GridContainer } from '@/components/molecules/GridContainer';
import type { ThemeItemProp } from '@/components/molecules/ThemeItems';
import { ThemeItem } from '@/components/molecules/ThemeItems';

const columns = {
  initial: 4,
  md: 6,
};

const labels = [
  '생일',
  '졸업선물',
  '스몰럭셔리',
  '명품선물',
  '결혼/집들이',
  '따듯한선물',
  '가벼운선물',
  '팬심저격',
  '교환권',
  '건강/비타민',
  '과일/한우',
  '출산/키즈',
];

const themeItems: ThemeItemProp[] = [];

for (let i = 0; i < 12; i++) {
  themeItems.push({
    id: i,
    imgSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    pContent: labels[i],
    linkTo: 'theme/life_small_gift',
  });
}

export const ThemeCategories = () => {
  return (
    <ThemeCategoriesWrapper>
      <GridContainer columns={columns} items={themeItems} component={ThemeItem} />
    </ThemeCategoriesWrapper>
  );
};

const ThemeCategoriesWrapper = styled.section`
  padding: 54px 52px 23px;
`;
