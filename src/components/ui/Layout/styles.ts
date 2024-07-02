import { css } from '@emotion/react';

import {
  AlignItems,
  Column,
  FlexDirection,
  JustifyContent,
} from '@/types/uiTypes';

export const containerStyle = (
  maxWidth?: string,
  flexDirection?: FlexDirection,
  justifyContent?: JustifyContent,
  alignItems?: AlignItems
) =>
  css({
    display: 'flex',
    width: '100%',
    maxWidth,
    flexDirection,
    justifyContent,
    alignItems,
  });

export const contentStyle = (backgroundColor: string, height: string) =>
  css({
    padding: `0 1rem`,
    backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height,
  });

export const gridStyle = (gap: number, columns: Column) => {
  const baseStyle = {
    display: 'grid',
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
    gridTemplateColumns: `repeat(${columns.initial}, 1fr)`,
    '@media (min-width: 1024px)': {
      gridTemplateColumns: `repeat(${columns.lg}, 1fr)`,
    },
    '@media (min-width: 768px) and (max-width: 1024px)': {
      gridTemplateColumns: `repeat(${columns.md}, 1fr)`,
    },
    '@media (min-width: 500px) and (max-width: 768px)': {
      gridTemplateColumns: `repeat(${columns.sm}, 1fr)`,
    },
    '@media (max-width: 350px)': {
      gridTemplateColumns: `repeat(${columns.initial}, 1fr)`,
    },
  });
};
