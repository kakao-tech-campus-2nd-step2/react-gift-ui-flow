import { css } from '@emotion/react';

import { colors } from '@/styles/theme';

export const buttonStyle = css({
  padding: 'auto',
  fontSize: '1.4rem',
});

export const calloutStyle = css({
  width: '4rem',
  height: '4rem',
  color: colors.white,
  fontWeight: '800',
});

export const textStyle = (isActive: boolean) =>
  css({
    fontWeight: isActive ? '800' : '400',
    color: isActive ? `${colors.blue[400]}` : `${colors.black}`,
    transition: 'all 0.3s ease',
  });
