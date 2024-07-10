// components/Button.js
import styled from '@emotion/styled';
import React from 'react';

import { theme } from '@/styles/theme';

type Props = {
  themeName?: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
  size?: 'large' | 'small' | 'responsive';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<Props> = ({ themeName = 'kakao', ...props }) => <Wrapper themeName={themeName} {...props} />;

const Wrapper = styled.button<Pick<Props, 'themeName' | 'size'>>(
  {
    width: '100%',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 200ms',
  },
  ({ size = 'responsive' }) => {
    const largeStyle = {
      height: '60px',
      fontSize: theme.fontSizes.medium,
    };

    const smallStyle = {
      height: '40px',
      fontSize: theme.fontSizes.small,
    };
    if (size === 'large') return largeStyle;
    if (size === 'small') return smallStyle;

    return {
      ...smallStyle,
      [`@media screen and (min-width:${theme.breakpoints.sm})`]: largeStyle,
    };
  },
  ({ themeName = 'kakao' }) => {
    const bgColor = theme.colors[themeName as keyof typeof theme.colors];
    const hoverColor = theme.colors[(themeName + 'Hover') as keyof typeof theme.colors];

    return {
      color: '#fff', // 기본 텍스트 색상
      backgroundColor: bgColor,
      '&:hover': {
        backgroundColor: hoverColor,
      }
    };
  }
);
