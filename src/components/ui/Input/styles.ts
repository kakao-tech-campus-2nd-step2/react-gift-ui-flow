import { CSSObject, css } from '@emotion/react';

import { colors } from '@/styles/theme';

export const inputSizeStyles: {
  [key in 'small' | 'large' | 'response']: CSSObject;
} = {
  small: {
    height: '2rem',
    fontSize: '0.875rem',
  },
  large: {
    height: '2.25rem',
    fontSize: '1rem',
  },
  response: {
    height: '2.5rem',
    fontSize: '14px',
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
  size: 'small' | 'large' | 'response';
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
