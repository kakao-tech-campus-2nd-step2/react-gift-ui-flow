import { ButtonHTMLAttributes } from 'react';

import { GiftFilterType } from '@/types/rankTypes';

import { textStyle } from './styles';

interface ActiveGiftButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  gift: GiftFilterType;
  isActive: boolean;
  onClick: () => void;
}

export const ActiveGiftButton = ({
  gift,
  isActive,
  onClick,
  ...props
}: ActiveGiftButtonProps) => {
  return (
    <button onClick={onClick} css={textStyle(isActive)} {...props}>
      {gift}
    </button>
  );
};
