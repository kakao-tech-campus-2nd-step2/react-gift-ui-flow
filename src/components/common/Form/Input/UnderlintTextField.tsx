/* eslint-disable react/jsx-props-no-spreading */
/** @jsxImportSource @emotion/react */

import '@styles/input.css';

type InputProps = {
  disabled?: boolean;
  invalid?: boolean;
  Size: 'sm' | 'md' | 'lg' | 'responsive';
} & React.InputHTMLAttributes<HTMLInputElement>;

function UnderlineTextField({ disabled = false, invalid = false, Size, ...rest }: InputProps) {
  return (
    <input
      disabled={disabled}
      className={`underlineTextField ${invalid && 'underlineTextField--invalid '} underlineTextField--${Size}`}
      {...rest}
    />
  );
}

export default UnderlineTextField;
