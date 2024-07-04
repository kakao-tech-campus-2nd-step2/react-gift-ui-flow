import { ButtonHTMLAttributes } from 'react';

import { useFilter } from '@/context/filter/useFilter';
import { GiftFilterType } from '@/types/rankTypes';

import { textStyle } from './styles';

interface ActiveGiftButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  gift: GiftFilterType;
}

export const ActiveGiftButton = ({ gift, ...props }: ActiveGiftButtonProps) => {
  const { giftFilter, setGiftFilter } = useFilter();

  const isActive = gift === giftFilter;
  const onClick = () => setGiftFilter(gift);

  return (
    <button onClick={onClick} css={textStyle(isActive)} {...props}>
      {gift}
    </button>
  );
};
