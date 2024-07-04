import { css } from '@emotion/react';

import {
  AlignItems,
  Column,
  FlexDirection,
  JustifyContent,
  PlaceItems,
} from '@/types/uiTypes';

export const containerStyle = (
  maxWidth?: string,
  flexDirection?: FlexDirection,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems,
  gap?: string
) =>
  css({
    display: 'flex',
    width: '100%',
    maxWidth,
    flexDirection,
    justifyContent,
    alignItems,
    gap,
  });

export const gridStyle = (
  gap: number,
  columns: Column,
  placeItems: PlaceItems
) => {
  const baseStyle = {
    display: 'grid',
    width: '100%',
    placeItems,
    gap: `${gap}px`,
  };

  if (typeof columns === 'number') {
    return css({
      ...baseStyle,
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
    });
  }

  return css({
    ...baseStyle,
    justifyItems: 'center',
    gridTemplateColumns: `repeat(${columns.initial}, 1fr)`,
    '@media (max-width: 350px)': {
      gridTemplateColumns: `repeat(${columns.initial}, 1fr)`,
    },
    '@media (min-width: 500px)': {
      gridTemplateColumns: `repeat(${columns.sm}, 1fr)`,
    },
    '@media (min-width: 768px)': {
      gridTemplateColumns: `repeat(${columns.md}, 1fr)`,
    },
    '@media (min-width: 1024px)': {
      gridTemplateColumns: `repeat(${columns.lg}, 1fr)`,
    },
  });
};
