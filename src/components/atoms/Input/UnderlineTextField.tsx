import styled from '@emotion/styled';

import { breakpoints } from '@/styles/variants';

// Extends Input field
type Props = {
  invalid?: boolean;
  size?: 'large' | 'small' | 'responsive';
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UnderlineTextField = (props: Props) => <Input {...props} />;

const Input = styled.input<Pick<Props, 'invalid' | 'size'>>(
  {
    width: '100%',
    boxSizing: 'border-box',
    color: '#191919',
    transition: 'border-color 200ms',
    borderStyle: 'solid',

    '&:focus': {
      outline: 'none',
      borderColor: '#252525',
    },
    '&:disabled': {
      color: '#7d7d7d',
      cursor: 'not-allowed',
    },

    '&::placeholder': {
      color: '#7d7d7d',
    },
  },
  ({ size = 'responsive' }) => {
    const largeStyle = {
      minHeight: '46px',
      fontSize: '18px',
      lineHeight: '25px',
      padding: '10px 0 8px',
      borderWidth: '0 0 2px',
    };

    const smallStyle = {
      minHeight: '42px',
      fontSize: '15px',
      lineHeight: '1.5',
      padding: '9px 0',
      borderWidth: '0 0 1px',
    };

    if (size === 'large') return largeStyle;
    if (size === 'small') return smallStyle;

    return {
      ...smallStyle,
      [`@media screen and (min-width:${breakpoints.sm})`]: {
        ...largeStyle,
      },
    };
  },
  ({ invalid = false }) => {
    if (invalid) {
      return {
        borderColor: '#ff4b4b',
      };
    }

    return {
      borderColor: '#ccc',
    };
  },
);
