import { css } from '@emotion/react';

export const contentStyle = (backgroundColor: string, height: string) =>
  css({
    padding: `0 1rem`,
    backgroundColor,
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
    height,
  });
