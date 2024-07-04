import itemThumbnail from '@/assets/images/itemThumbnail.jpg';
import { type DefaultGoodsItemsProps } from '@/components/common/GoodsItem/Default';

export interface Item extends Omit<DefaultGoodsItemsProps, 'rankingIndex'> {
  rankingIndex: number;
}

const createRankingItems = (): Item[] => {
  return Array.from({ length: 30 }, (_, index) => ({
    rankingIndex: index + 1,
    imageSrc: itemThumbnail,
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  }));
};

const createDefaultItems = (): DefaultGoodsItemsProps[] => {
  return Array.from({ length: 30 }, (_) => ({
    imageSrc: itemThumbnail,
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  }));
};

export const rankingItems = createRankingItems();
export const defaultItems = createDefaultItems();
