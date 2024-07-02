import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  elementSize: ElementSize,
  invalid?: boolean,
  errorMessage?: string,
}

export interface FixedSize {
  width: string,
  height: string,
}

export type ElementSize = FixedSize | 'responsive' | 'small' | 'big';
