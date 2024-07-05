import { useState } from 'react';

interface Item {
  id: number;
  rank: number;
  corp: string;
  name: string;
  price: number;
  image: string;
}

const useFilter = (items: Item[]) => {
  const [filter, setFilter] = useState('all');
  const [subFilter, setSubFilter] = useState('받고 싶어한');

  const filterItems = () => {
    let filteredItems = items;

    if (filter === 'all') {
      filteredItems = items;
    } else if (filter === 'female') {
      if (subFilter === '받고 싶어한' || subFilter === '많이 선물한' || subFilter === '위시로 받은') {
        filteredItems = items;
      }
    } else if (filter === 'male') {
      if (subFilter === '받고 싶어한' || subFilter === '많이 선물한' || subFilter === '위시로 받은') {
        filteredItems = items;
      }
    } else if (filter === 'teen') {
      if (subFilter === '받고 싶어한' || subFilter === '많이 선물한' || subFilter === '위시로 받은') {
        filteredItems = items;
      }
    }

    return filteredItems;
  };

  return { filter, setFilter, subFilter, setSubFilter, filterItems };
};

export default useFilter;