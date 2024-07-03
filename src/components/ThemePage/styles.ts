import { css } from '@emotion/react';

import { colors } from '@/styles/theme';

export const themeHeaderStyle = css({
  paddingTop: '2.5rem',
  paddingBottom: '2.5rem',
});

const textColor = {
  title: colors.whiteOpacity[60],
  subTitle: colors.white,
  description: colors.whiteOpacity[60],
};

const fontWeight = {
  title: '800',
  subTitle: '800',
  description: '500',
};

const fontSize = {
  title: '1.25rem',
  subTitle: '2rem',
  description: '1.4rem',
};

export const textStyle = (textType: 'title' | 'subTitle' | 'description') =>
  css({
    color: textColor[textType],
    fontWeight: fontWeight[textType],
    fontSize: fontSize[textType],
  });

export const themeContentStyle = css({
  padding: '2rem 0',
});
