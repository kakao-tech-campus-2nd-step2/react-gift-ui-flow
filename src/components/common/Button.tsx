import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface IButton extends React.ComponentProps<'button'> {
  themetype: 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
  size?: 'small' | 'large' | 'responsive';
  children?: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export const Button = ({ themetype = 'kakao', size = 'responsive', children, onClick, ...rest }: IButton) => {
  return (
    <StyleBtn onClick={onClick} themetype={themetype} size={size} {...rest}>
      {children}
    </StyleBtn>
  );
};
const themeStyles = {
  kakao: css`
    background-color: #fee500;
    color: black;
    &:hover {
      background-color: #fada0a;
      transition: 0.1s;
    }
  `,
  outline: css`
    background-color: transparent;
    color: black;
    box-shadow: rgb(168, 168, 168) 0px 0px 0px 1px inset;
    &:hover {
      background-color: #f8f8f8;
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
    height: 40px;
  `,
  large: css`
    font-size: 16px;
    height: 60px;
  `,
  responsive: css`
    font-size: 14px;
    height: 50px;

    @media (min-width: 768px) {
      font-size: 14px;
      height: 50px;
    }
    @media (min-width: 1024px) {
      font-size: 16px;
      height: 60px;
    }
  `,
};

const StyleBtn = styled.button<Pick<IButton, 'themetype' | 'size'>>`
  width: 100%;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => themeStyles[props.themetype]};
  ${(props) => (props.size ? sizeStyles[props.size] : null)};
`;
