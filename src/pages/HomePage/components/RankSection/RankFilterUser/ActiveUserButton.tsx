import { ButtonHTMLAttributes } from 'react';

import { UserFilterButtonType } from '@/types/rankTypes';

import { Callout } from '@/components/Callout';

import { buttonStyle, calloutStyle, textStyle } from './styles';

interface ActiveUserButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  user: UserFilterButtonType;
  isActive: boolean;
  onClick: () => void;
}

export const ActiveUserButton = ({
  user,
  isActive,
  onClick,
  ...props
}: ActiveUserButtonProps) => {
  return (
    <button onClick={onClick} css={buttonStyle} {...props}>
      <Callout
        isActive={isActive}
        theme="skyblue"
        radius={20}
        justifyContent="center"
        alignItems="center"
        css={calloutStyle}
      >
        {user.emoji}
      </Callout>
      <div css={textStyle(isActive)}>{user.value}</div>
    </button>
  );
};
