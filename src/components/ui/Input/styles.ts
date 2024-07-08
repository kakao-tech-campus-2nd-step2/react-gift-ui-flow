import { CSSObject, css } from '@emotion/react';

import { colors } from '@/styles/theme';
import { Size } from '@/types/uiTypes';

export const inputSizeStyles: {
  [key in 'small' | 'medium' | 'large' | 'response']: CSSObject;
} = {
  small: {
    height: '2rem',
    fontSize: '14px',
  },
  medium: {
    height: '2.5rem',
    fontSize: '16px',
  },
  large: {
    height: '3rem',
    fontSize: '18px',
  },
  response: {
    height: '2rem',
    fontSize: '14px',
    '@media (min-width: 520px)': {
      height: '2.5rem',
      fontSize: '16px',
    },
    '@media (min-width: 768px)': {
      height: '3rem',
      fontSize: '18px',
      borderBottomWidth: '0.18rem',
    },
    '@media (min-width: 1024px)': {
      height: '3.5rem',
    },
  },
};

export const inputStateStyles: {
  [key in 'default' | 'invalid' | 'disabled']: CSSObject;
} = {
  default: {
    '&:focus': {
      borderColor: colors.gray[400],
    },
  },
  invalid: {
    borderColor: colors.pink,
    '&:focus': {
      borderColor: colors.red,
    },
  },
  disabled: {
    backgroundColor: colors.gray[100],
    cursor: 'not-allowed',
  },
};

export const inputStyle = ({
  size,
  invalid,
  disabled,
}: {
  size: Size;
  invalid: boolean;
  disabled: boolean;
}) =>
  css({
    borderBottom: `0.12rem solid ${colors.gray[300]}`,
    outline: 'none',
    padding: '0 0.5rem',
    ...inputSizeStyles[size],
    ...(disabled && inputStateStyles.disabled),
    ...(invalid && inputStateStyles.invalid),
    ...(!disabled && !invalid && inputStateStyles.default),
  });
