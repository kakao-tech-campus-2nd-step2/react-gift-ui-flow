import { css } from '@emotion/react';

import { colors } from '@/styles/theme';

export const buttonContainerStyle = css({
  padding: 'auto',
  fontSize: '1.4rem',
});

export const userCalloutStyle = css({
  width: '4rem',
  height: '4rem',
  color: colors.white,
  fontWeight: '800',
});

export const userTextStyle = (isActive: boolean) =>
  css({
    fontWeight: isActive ? '800' : '400',
    color: isActive ? `${colors.blue[400]}` : `${colors.black}`,
    transition: 'all 0.3s ease',
  });

export const giftTextStyle = (isActive: boolean) =>
  css({
    padding: '1rem 0',
    fontWeight: isActive ? '800' : '600',
    color: isActive ? `${colors.blue[400]}` : `${colors.blue[300]}`,
    transition: 'all 0.3s ease',
  });
