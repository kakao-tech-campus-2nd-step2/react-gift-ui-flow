import { ButtonHTMLAttributes } from 'react';

import { Size, Theme } from '@/types/uiTypes';

import { buttonStyle } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: Theme;
  size?: Size;
}

export const Button = ({
  children,
  onClick,
  theme = 'kakao',
  size = 'small',
  ...props
}: ButtonProps) => {
  return (
    <button onClick={onClick} css={buttonStyle(theme, size)} {...props}>
      {children}
    </button>
  );
};
