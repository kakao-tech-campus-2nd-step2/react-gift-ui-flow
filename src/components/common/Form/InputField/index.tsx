import React from 'react';
import Input, { InputProps } from '../Input';

export interface InputFieldProps extends InputProps {
  type: 'text' | 'password';
  label: string;
  labelFor: string;
  srOnly?: boolean;
}

export default function InputField({ type, label, labelFor, srOnly, ...rest }: InputFieldProps) {
  return (
    <div>
      <label htmlFor={labelFor} className={srOnly ? 'sr-only' : ''}>
        {label}
      </label>
      <Input id={labelFor} type={type} {...rest} />
    </div>
  );
}
