import { ButtonHTMLAttributes } from 'react';

import { GiftFilterType } from '@/types/rankTypes';

import { giftTextStyle } from './styles';

interface ActiveGiftButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  gift: GiftFilterType;
  isActive: boolean;
}

export const ActiveGiftButton = ({
  gift,
  isActive,
  ...props
}: ActiveGiftButtonProps) => {
  return (
    <button css={giftTextStyle(isActive)} {...props}>
      {gift}
    </button>
  );
};
