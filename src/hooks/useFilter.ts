import { useState } from 'react';

type Filter =
  | '전체'
  | '여성이'
  | '남성이'
  | '청소년이'
  | '받고 싶어한'
  | '많이 선물한'
  | '위시로 받은';

export const useFilter = () => {
  const [filter, setFilter] = useState<Filter>('전체');

  const changeFilter = (newFilter: Filter) => {
    setFilter(newFilter);
  };

  return {
    filter,
    changeFilter,
  };
};
