import { useState } from 'react';

export type Filter =
  | '전체'
  | '여성이'
  | '남성이'
  | '청소년이'
  | '받고 싶어한'
  | '많이 선물한'
  | '위시로 받은';

export const useFilter = () => {
  const [filter, setFilter] = useState<Filter>('전체');

  const filterOptions: { label: string; value: Filter }[] = [
    { label: '전체', value: '전체' },
    { label: '👩 여성이', value: '여성이' },
    { label: '👨 남성이', value: '남성이' },
    { label: '🧒 청소년이', value: '청소년이' },
    { label: ' 받고 싶어한', value: '받고 싶어한' },
    { label: ' 많이 선물한', value: '많이 선물한' },
    { label: ' 위시로 받은', value: '위시로 받은' },
  ];

  const changeFilter = (newFilter: Filter) => {
    setFilter(newFilter);
  };

  return {
    filter,
    changeFilter,
    filterOptions,
  };
};
