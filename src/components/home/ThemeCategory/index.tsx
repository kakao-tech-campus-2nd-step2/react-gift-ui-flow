import React from 'react';
import styled from '@emotion/styled';
import { Grid, Inner } from '@components/common';
import { BREAK_POINTS } from '@assets/styles/variants';
import { THEME_CATEGORY, THEME_CATEGORY_LIST } from './constants';
import ThemeItem from './ThemeItem';

export default function ThemeCategory() {
  return (
    <ThemeCategoryContainer>
      <Inner maxWidth={BREAK_POINTS.md}>
        <Grid gap={THEME_CATEGORY.GAP} columns={THEME_CATEGORY.COLUMNS}>
          {THEME_CATEGORY_LIST.map(({ id, image, name, themeKey }) => (
            <ThemeItem key={id} image={image} name={name} themeKey={themeKey} />
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
