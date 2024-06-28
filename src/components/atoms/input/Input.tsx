import ElementSize from '@styles/size';
import { InputHTMLAttributes } from 'react';
import { css } from '@emotion/react';

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
          width: ${typeof elementSize === 'string'
          ? 'auto'
          : elementSize.width};
          height: ${typeof elementSize === 'string'
            ? 'auto'
            : elementSize.height};
          border: none;
          border-bottom: #939393 3px solid;
          padding-left: 7px;
          transition: all 0.2s ease-in;

          &:focus {
            outline: none;
            border-bottom: #494949 3px solid;
          }
        `}
        disabled={disabled}
        {...rest}
      />
      {invalid
        ? (
          <p css={css`
            color: #ff4343;
            font-size: 12px;
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
