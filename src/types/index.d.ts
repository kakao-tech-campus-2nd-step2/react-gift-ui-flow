import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

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

export interface BreakpointGridProps {
  columnsXS?: number,
  columnsSm?: number,
  columnsMd?: number,
  columnsLg?: number,
  columnsDefault: number,
  gap?: number,
}

interface ContainerProps {
  maxWidth?: string,
  elementSize?: ContainerSize,
  flexDirection?: 'row' | 'column',
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around',
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch',
  children?: ReactNode,
  backgroundColor?: string;
  cssProps?: CSSProperties;
  padding?: string;
}

interface ResponsiveContainerProps extends ContainerProps { // padding은 어떻게 하지?
  sizeDefault: ContainerSize;
  sizeXS?: ContainerSize;
  sizeSm?: ContainerSize;
  sizeMd?: ContainerSize;
  sizeLg?: ContainerSize;
}

interface ThemeItemProps {
  themeKey: GiftThemeKey;
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
