import styled from '@emotion/styled';
import { useState } from 'react';

import { breakpoints } from '@/styles/variants';

type Props = {
  invalid?: boolean;
  size?: 'large' | 'small' | 'responsive';
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const UnderlineTextField: React.FC<Props> = ({label, ...props}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleFocus = () => {
    setInputValue('');
  };

  const handleBlur = () => {
    if (inputValue === '') {
      setInputValue('');
    }
  };

  return (
    <Input
      type="text"
      value={inputValue}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholder={label}
      {...props}
    />
  );
};

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
