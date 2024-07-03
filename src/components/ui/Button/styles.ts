import { CSSObject, css } from '@emotion/react';

import { colors } from '@/styles/theme';
import { Size, Theme } from '@/types/uiTypes';

const backgroundColor = {
  kakao: colors.yellow[100],
  outline: 'transparent',
  black: colors.black,
  lightGray: colors.gray[200],
  darkGray: colors.gray[400],
};

const textColor = {
  kakao: colors.gray[500],
  outline: colors.gray[500],
  black: colors.white,
  lightGray: colors.gray[500],
  darkGray: colors.white,
};

const hoverBackgroundColor = {
  kakao: colors.yellow[200],
  outline: colors.gray[100],
  black: colors.gray[500],
  lightGray: colors.gray[300],
  darkGray: colors.gray[500],
};

export const themeStyles = (theme: Theme) => ({
  backgroundColor: backgroundColor[theme],
  color: textColor[theme],
  '&:hover': {
    backgroundColor: hoverBackgroundColor[theme],
  },
});

export const sizeStyles: {
  [key in 'small' | 'large' | 'response']: CSSObject;
} = {
  small: {
    height: '2rem',
    padding: '0 1rem',
  },
  large: {
    height: '2.25rem',
    padding: '0 4rem',
  },
  response: {
    height: '2.5rem',
    width: '30rem',
    padding: 'auto',
    '@media (min-width: 768px)': {
      height: '3.5rem',
    },
    '@media (min-width: 1024px)': {
      height: '4rem',
    },
  },
};

export const buttonStyle = (theme: Theme, size: Size) =>
  css({
    borderRadius: '0.25rem',
    border: theme === 'outline' ? `1.2px solid ${colors.gray[200]}` : '',
    ...themeStyles(theme),
    ...sizeStyles[size],
  });
