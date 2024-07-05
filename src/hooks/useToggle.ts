import { useState } from 'react';

type UseToggleHook = [boolean, () => void];

export default function useToggle(initialState: boolean): UseToggleHook {
  const [isToggle, setIsToggle] = useState<boolean>(initialState);

  const toggle = () => {
    setIsToggle((prevIsToggle) => !prevIsToggle);
  };

  return [isToggle, toggle];
}
