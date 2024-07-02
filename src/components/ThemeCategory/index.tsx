import React from 'react';
import styled from '@emotion/styled';
import Grid from '@components/common/Layout/Grid/Grid';
import Inner from '@components/common/Layout/Inner';
import themeCategories from '@data/themeCategories';
import { THEME_CATEGORY } from './constants';
import ThemeItem from './ThemeItem';

export default function ThemeCategory() {
  return (
    <ThemeCategoryContainer>
      <Inner maxWidth={THEME_CATEGORY.INNER_MAX_WIDTH}>
        <Grid gap={THEME_CATEGORY.GAP} columns={THEME_CATEGORY.COLUMNS}>
          {themeCategories.map((category) => (
            <ThemeItem key={category.id} image={category.image} name={category.name} />
          ))}
        </Grid>
      </Inner>
    </ThemeCategoryContainer>
  );
}

const ThemeCategoryContainer = styled.section`
  padding-top: 45px;
  padding-bottom: 23px;
`;
