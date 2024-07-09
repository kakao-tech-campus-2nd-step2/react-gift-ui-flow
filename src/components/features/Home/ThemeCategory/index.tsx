import React from 'react';
import styled from '@emotion/styled';
import { Grid, CenteredContainer } from '@components/common';
import { THEME_CATEGORY_LIST } from './constants';
import ThemeItem from './ThemeItem';

const GRID_GAP = 0;
const GRID_COLUMNS = 6;

export default function ThemeCategory() {
  return (
    <ThemeCategoryContainer>
      <CenteredContainer maxWidth="md">
        <Grid gap={GRID_GAP} columns={GRID_COLUMNS}>
          {THEME_CATEGORY_LIST.map(({ id, image, name, themeKey }) => (
            <ThemeItem key={id} image={image} name={name} themeKey={themeKey} />
          ))}
        </Grid>
      </CenteredContainer>
    </ThemeCategoryContainer>
  );
}

const ThemeCategoryContainer = styled.section`
  padding-top: 45px;
  padding-bottom: 23px;
`;
