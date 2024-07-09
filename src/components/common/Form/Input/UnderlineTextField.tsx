import styled from '@emotion/styled';
import React from 'react';

import { theme } from '@/styles/theme';

type Props = {
  invalid?: boolean;
  size?: 'large' | 'small' | 'responsive';
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UnderlineTextField = (props: Props) => <Input {...props} />;

const Input = styled.input<Pick<Props, 'invalid' | 'size'>>(
  {
    width: '100%',
    boxSizing: 'border-box',
    color: theme.colors.primary,
    transition: 'border-color 200ms',
    borderStyle: 'solid',
    '&:focus': {
      outline: 'none',
      borderColor: theme.colors.borderHover,
    },
    '&:disabled': {
      color: theme.colors.placeholder,
      cursor: 'not-allowed',
    },
    '&::placeholder': {
      color: theme.colors.placeholder,
    },
  },
  ({ size = 'responsive' }) => {
    const largeStyle = {
      minHeight: '46px',
      fontSize: theme.fontSizes.large,
      lineHeight: '25px',
      padding: '10px 0 8px',
      borderWidth: '0 0 2px',
    };

    const smallStyle = {
      minHeight: '42px',
      fontSize: theme.fontSizes.small,
      lineHeight: '1.5',
      padding: '9px 0',
      borderWidth: '0 0 1px',
    };

    if (size === 'large') return largeStyle;
    if (size === 'small') return smallStyle;

    return {
      ...smallStyle,
      [`@media screen and (min-width:${theme.breakpoints.sm})`]: largeStyle,
    };
  },
  ({ invalid = false }) => ({
    borderColor: invalid ? theme.colors.error : theme.colors.border,
  })
);
