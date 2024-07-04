import React from 'react';
import styled from '@emotion/styled';
import { Grid, Inner } from '@components/common';
import { THEME_CATEGORY, THEME_CATEGORY_LIST } from './constants';
import ThemeItem from './ThemeItem';

export default function ThemeCategory() {
  return (
    <ThemeCategoryContainer>
      <Inner maxWidth={1024}>
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
