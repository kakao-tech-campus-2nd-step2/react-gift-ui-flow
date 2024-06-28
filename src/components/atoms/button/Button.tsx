import ElementSize, { FixedSize } from '@styles/size';
import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'kakao' | 'naver' | 'black' | 'lightGray' | 'darkGray',
  elementSize: ElementSize,
  text: string,
}
function Button({
  theme, elementSize, text, ...rest
}: ButtonProps) {
  let size = elementSize;
  if (typeof elementSize !== 'object') {
    size = {
      width: 'auto',
      height: size === 'big' ? '60px' : '40px',
    };
  }
  const buttonColors = {
    kakao: 'rgb(254, 229, 0)',
    naver: 'rgb(40,205,0)',
    black: 'rgb(5,5,5)',
    lightGray: 'rgb(138,138,138)',
    darkGray: 'rgb(37,37,37)',
  };
  const colors = {
    kakao: 'rgb(5, 5, 5)',
    naver: 'rgb(5, 5, 5)',
    black: 'rgb(255, 255, 255)',
    lightGray: 'rgb(0, 0, 0)',
    darkGray: 'rgb(255, 255, 255)',
  };
  const buttonHover = {
    kakao: 'rgb(255,233,25)',
    naver: 'rgb(49,207,9)',
    black: 'rgb(43,43,43)',
    lightGray: 'rgb(174,174,174)',
    darkGray: 'rgb(78,78,78)',
  };
  return (
    <button
      css={css`
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
        background-color: ${buttonColors[theme]};
        color: ${colors[theme]};
        width: ${typeof size === 'string' ? 'auto' : (size as FixedSize).width};
        height: ${typeof size === 'string'
        ? 'auto'
        : (size as FixedSize).height};

        &:hover {
          background-color: ${buttonHover[theme]};
        }
      `}
      type="button"
      {...rest}
    >
      {text}
    </button>
  );
}

export default Button;
