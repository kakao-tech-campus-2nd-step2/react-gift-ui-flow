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

export interface RankingBadgeProps {
  rankingIndex?: number;
}

export interface FixedSize {
  width: string,
  height: string,
}

export type ContainerSize = FixedSize | 'full-width';

const giftThemeKeys = ['birthday', 'graduation', 'smallluxury', 'luxury', 'marriage', 'warm',
  'small', 'fan', 'exchange', 'health', 'grocery', 'kids'];

export type GiftThemeKey = typeof giftThemeKeys[number];

export type ElementSize = FixedSize | 'responsive' | 'small' | 'big';

export type GroupFilter = 'all' | 'men' | 'women' | 'adolescent';

export type PopularityFilter = 'mostWanted' | 'mostGiven' | 'mostGivenByWish';
