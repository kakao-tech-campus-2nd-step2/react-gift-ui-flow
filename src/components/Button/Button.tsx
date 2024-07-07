import React from 'react';
import { StyledButton } from './Button.styles';

type ThemeProps = 'default' | 'primary' | 'secondary';
type SizeProps = 'small' | 'medium' | 'large' | 'responsive';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme: ThemeProps;
  size: SizeProps;
}

const Button = ({ theme, size, children, ...props }: ButtonProps) => (
  <StyledButton theme={theme} size={size} {...props}>
    {children}
  </StyledButton>
);

export default Button;
