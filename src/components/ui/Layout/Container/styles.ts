import { css } from '@emotion/react';

import { AlignItems, FlexDirection, JustifyContent } from '@/types/uiTypes';

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
