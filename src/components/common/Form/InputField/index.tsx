import React from 'react';
import styled from '@emotion/styled';
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
      <Label htmlFor={labelFor} srOnly={srOnly}>
        {label}
      </Label>
      <Input id={labelFor} type={type} {...rest} />
    </div>
  );
}

const Label = styled.label<{ srOnly?: boolean }>`
  ${({ srOnly }) =>
    srOnly &&
    `
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  `}
`;
