import { type DefaultGoodsItemsProps } from '@/components/common/GoodsItem/Default';

export type Category =
  | '전체'
  | '여성이'
  | '남성이'
  | '청소년이'
  | '받고 싶어한'
  | '많이 선물한'
  | '위시로 받은';

export interface Item extends Omit<DefaultGoodsItemsProps, 'rankingIndex'> {
  rankingIndex: number;
}

export interface RankingItemsProps {
  items: Item[];
}
