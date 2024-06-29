import { InputHTMLAttributes } from 'react';
import ElementSize from '@styles/size';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  elementSize: ElementSize,
  invalid?: boolean,
  errorMessage?: string,
}
