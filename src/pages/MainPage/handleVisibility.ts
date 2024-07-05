import { useState } from 'react';

export const useVisibility = (initialVisibleItems: number) => {
  const [visibleItems, setVisibleItems] = useState(initialVisibleItems);

  const handleMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 6);
  };

  const handleLess = () => {
    setVisibleItems(6);
  };

  return {
    visibleItems,
    handleMore,
    handleLess,
  };
};
