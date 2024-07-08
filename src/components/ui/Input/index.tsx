import { InputHTMLAttributes, forwardRef } from 'react';

import { Size } from '@/types/uiTypes';

import { inputStyle } from './styles';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: Size;
  invalid?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ size = 'small', invalid = false, disabled = false, ...props }, ref) => {
    return (
      <input
        disabled={disabled}
        css={inputStyle({ size, invalid, disabled })}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
