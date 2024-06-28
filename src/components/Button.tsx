import { SerializedStyles, css } from '@emotion/react';
import styled from '@emotion/styled';

export type THEME = 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
export interface IButton {
  theme: THEME;
  size: 'small' | 'large' | 'responsive';
  children: string;
  onClick: () => void;
}
export const Button = ({ theme = 'kakao', size = 'responsive', children, onClick }: IButton) => {
  return (
    <StyleBtn onClick={onClick} theme={theme} size={size}>
      {children}
    </StyleBtn>
  );
};
const themeStyles: Record<THEME, SerializedStyles> = {
  kakao: css`
    background-color: yellow;
    color: black;
    &:hover {
      background-color: #e8bd30;
      transition: 0.1s;
    }
  `,
  outline: css`
    background: none;
    border: 1px solid #cecece;
    color: black;
    &:hover {
      background-color: #cecece;
      transition: 0.1s;
    }
  `,
  black: css`
    background-color: black;
    color: white;
    &:hover {
      background-color: #292929;
      transition: 0.1s;
    }
  `,
  lightGray: css`
    background-color: lightgray;
    color: black;
    &:hover {
      background-color: #a4a4a4;
      transition: 0.1s;
    }
  `,
  darkGray: css`
    background-color: #404040;
    color: white;
    &:hover {
      background-color: #4b4b4b;
      transition: 0.1s;
    }
  `,
};

const sizeStyles = {
  small: css`
    font-size: 12px;
    padding: 5px 10px;
  `,
  large: css`
    font-size: 16px;
    padding: 15px 30px;
  `,
  responsive: css`
    font-size: 12px;
    padding: 8px 16px;

    @media (min-width: 600px) {
      font-size: 14px;
      padding: 10px 20px;
    }

    @media (min-width: 900px) {
      font-size: 16px;
      padding: 12px 24px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
      padding: 15px 30px;
    }
  `,
};

const StyleBtn = styled.button<IButton>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  ${(props) => themeStyles[props.theme as THEME]};
  ${(props) => sizeStyles[props.size]};
`;
