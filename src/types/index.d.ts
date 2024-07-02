import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  elementSize: ElementSize,
  invalid?: boolean,
  errorMessage?: string,
}

export interface GoodsItemProps {
  rankingIndex?: number,
  imageSrc: string,
  subtitle: string,
  title: string,
  amount: number,
}

export interface FixedSize {
  width: string,
  height: string,
}

export type ElementSize = FixedSize | 'responsive' | 'small' | 'big';
