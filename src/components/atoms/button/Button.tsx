import { Theme } from '@styles/theme';
import ElementSize from '@styles/size';
import { css } from '@emotion/react';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme: Theme,
  elementSize: ElementSize,
  text: string,
}
function Button({
  theme, elementSize, text, ...rest
}: ButtonProps) {
  return (
    <button
      css={css`
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 16px;
        cursor: pointer;
        background-color: ${theme.buttonBg};
        color: ${theme.buttonText};
        width: ${typeof elementSize === 'string' ? 'auto' : elementSize.width};
        height: ${typeof elementSize === 'string' ? 'auto' : elementSize.height};
        &:hover {
          background-color: ${theme.buttonHover};
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
