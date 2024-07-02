import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';
import { buttonColors, buttonHoverColors, buttonTextColors } from '@styles/colors';
import { ElementSize, FixedSize } from '@/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: 'kakao' | 'naver' | 'black' | 'lightGray' | 'darkGray';
  elementSize: ElementSize;
  text: string;
}

function getButtonSize(size: ElementSize): FixedSize {
  if (typeof size === 'object') {
    return size;
  }

  return {
    width: 'auto',
    height: size === 'big' ? '60px' : '40px',
  };
}

function Button({
  theme, elementSize, text, ...rest
}: ButtonProps) {
  const size = getButtonSize(elementSize);

  return (
    <button
      css={css`
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 14px;
        cursor: pointer;
        background-color: ${buttonColors[theme]};
        color: ${buttonTextColors[theme]};
        width: ${size.width};
        height: ${size.height};
        transition: background-color 0.2s ease-in-out;

        &:hover {
          background-color: ${buttonHoverColors[theme]};
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
