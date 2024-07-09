import { useState } from 'react';

export const useCount = (initialCount: number) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 6);
  };

  const handleReset = () => {
    setCount(6);
  };

  return {
    count,
    handleIncrease,
    handleReset,
  };
};
