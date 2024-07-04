import styled from '@emotion/styled';

import { GridItemsBox } from '@/components/molecules/GridItemsBox';
import type { ThemeItemProp } from '@/components/molecules/ThemeItems';
import { ThemeItem } from '@/components/molecules/ThemeItems';

const columns = {
  initial: 4,
  md: 6,
};

const themeItems: ThemeItemProp[] = [];

for (let i = 0; i < 12; i++) {
  themeItems.push({
    id: i,
    imgSrc:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    pContent: 'pContent',
    linkTo: 'theme/life_small_gift',
  });
}

export const ThemeCategories = () => {
  return (
    <ThemeCategoriesWrapper>
      <GridItemsBox columns={columns} gridItems={themeItems} GridItemComponent={ThemeItem} />
    </ThemeCategoriesWrapper>
  );
};

const ThemeCategoriesWrapper = styled.section`
  padding: 54px 52px 23px;
`;
