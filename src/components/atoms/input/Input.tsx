import ElementSize from '@styles/size';
import { InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';
import { Themes } from '@styles/theme';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  elementSize: ElementSize,
  invalid?: boolean,
  errorMessage?: string,
}

function Input({
  disabled, invalid, elementSize, errorMessage, ...rest
}: InputProps) {
  return (
    <>
      <input
        css={css`
          width: ${typeof elementSize === 'string' ? 'auto' : elementSize.width};
          height: ${typeof elementSize === 'string' ? 'auto' : elementSize.height};
          border-radius: 5px;
          border: #333333 1px solid;
          padding-left: 7px;
          &:focus {
            outline: none;
          }
        `}
        disabled={disabled}
        {...rest}
      />
      {invalid
        ? (
          <p css={css`
          color: ${Themes.THEME_DARK.error};
          font-size: 15px;
          margin-top: 3px;  
          `}
          >
            {errorMessage ?? '잘못된 입력값입니다.'}
          </p>
        )
        : null}
    </>
  );
}

export default Input;
