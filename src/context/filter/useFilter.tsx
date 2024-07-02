import { useContext } from 'react';

import { FilterContext, FilterContextType } from './FilterContext';

export const useFilter = (): FilterContextType => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('FilterProvider를 반드시 사용해야합니다.');
  }

  return context;
};
