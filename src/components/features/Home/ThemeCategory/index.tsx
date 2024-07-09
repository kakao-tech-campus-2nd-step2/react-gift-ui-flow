import React from 'react';
import styled from '@emotion/styled';
import { Grid, Inner } from '@components/common';
import { BREAK_POINTS } from '@assets/styles/variants';
import { THEME_CATEGORY_LIST } from './constants';
import ThemeItem from './ThemeItem';

const GRID_GAP = 0;
const GRID_COLUMNS = 6;

export default function ThemeCategory() {
  return (
    <ThemeCategoryContainer>
      <Inner maxWidth={BREAK_POINTS.md}>
        <Grid gap={GRID_GAP} columns={GRID_COLUMNS}>
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
