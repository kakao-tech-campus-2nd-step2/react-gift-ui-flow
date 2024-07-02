import React from 'react';
import Image from '@components/common/Image/Image';
import Container from '@components/common/Layout/Container/Container';
import styled from '@emotion/styled';
import Grid from '@components/common/Layout/Grid/Grid';
import Inner from '@components/common/Layout/Inner';
import themeCategories from '@/data/themeCategories';
import { THEME_CATEGORY } from './constants';

export default function ThemeCategory() {
  return (
    <ThemeCategoryContainer>
      <Inner maxWidth={THEME_CATEGORY.INNER_MAX_WIDTH}>
        <Grid gap={THEME_CATEGORY.GAP} columns={THEME_CATEGORY.COLUMNS}>
          {themeCategories.map((category) => (
            <ThemeItemContainer>
              <Container key={category.id} flexDirection="column" alignItems="center">
                <Image
                  src={category.image}
                  width={THEME_CATEGORY.IMAGE_SIZE}
                  height={THEME_CATEGORY.IMAGE_SIZE}
                  radius={THEME_CATEGORY.IMAGE_RADIUS}
                  alt={category.name}
                />
                <CategoryName>{category.name}</CategoryName>
              </Container>
            </ThemeItemContainer>
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

const ThemeItemContainer = styled.div`
  cursor: pointer;
`;

const CategoryName = styled.p`
  padding-top: 7px;
`;
