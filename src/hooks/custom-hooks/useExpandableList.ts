import { useState } from 'react';

export const useExpandableList = (initialLength: number, expandedLength: number) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded((prev) => !prev);
  };

  const listLength = isExpanded ? expandedLength : initialLength;

  return {
    isExpanded,
    listLength,
    toggleExpansion,
  };
};
