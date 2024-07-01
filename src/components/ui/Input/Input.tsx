import { InputHTMLAttributes, forwardRef } from 'react';

import { inputStyle } from './styles';

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'small' | 'large' | 'response';
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
