import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type ButtonTheme = 'kakao' | 'primary' | 'darkGray';
type ButtonSize = 'small' | 'large' | 'responsive';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme;
  size?: ButtonSize;
  children: ReactNode;
}

interface StyledButtonProps {
  theme: ButtonTheme;
  size: ButtonSize;
}

export default function Button({ theme = 'kakao', size = 'large', children, ...rest }: ButtonProps) {
  return (
    <StyledButton {...{ theme, size }} {...rest}>
      {children}
    </StyledButton>
  );
}

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        height: 40px;
        font-size: 15px;
      `;

    case 'large':
      return css`
        height: 60px;
        font-size: 16px;
      `;
    case 'responsive':
      return css`
        height: 40px;
        font-size: 15px;

        @media only screen and (min-width: 768px) {
          height: 60px;
          font-size: 16px;
        }
      `;
    default:
      return css``;
  }
};

const getThemeStyles = (theme: ButtonTheme) => {
  switch (theme) {
    case 'kakao':
      return css`
        background-color: #fee500;
        color: #111;

        &:hover {
          opacity: 0.8;
        }
      `;
    case 'primary':
      return css`
        background-color: #fff;
        border: 1px solid #b5b2b2;
        color: #111;

        &:hover {
          background-color: #f8f8f8;
        }
      `;
    case 'darkGray':
      return css`
        background-color: #444;
        color: #fff;
        font-weight: 700;

        &:hover {
          background-color: #555;
        }
      `;
    default:
      return css``;
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  width: 100%;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ size }) => getSizeStyles(size)}
  ${({ theme }) => getThemeStyles(theme)}
`;
