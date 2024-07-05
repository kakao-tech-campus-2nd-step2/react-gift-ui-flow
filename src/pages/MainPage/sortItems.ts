import type { Item } from '@/pages/MainPage/types';

export const sortItems = (items: Item[], order: 'ASC' | 'DESC'): Item[] => {
  return [...items].sort((a, b) =>
    order === 'ASC' ? a.amount - b.amount : b.amount - a.amount
  );
};
