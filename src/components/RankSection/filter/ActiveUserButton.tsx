import { ButtonHTMLAttributes } from 'react';

import { UserFilterContentType } from '@/types/rankTypes';

import { Callout } from '@/components/ui/Callout/Callout';

import {
  buttonContainerStyle,
  userCalloutStyle,
  userTextStyle,
} from './styles';

interface ActiveUserButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  user: UserFilterContentType;
  isActive: boolean;
}

export const ActiveUserButton = ({
  user,
  isActive,
  ...props
}: ActiveUserButtonProps) => {
  return (
    <button {...props} css={buttonContainerStyle}>
      <Callout
        isActive={isActive}
        theme="skyblue"
        radius={20}
        justifyContent="center"
        alignItems="center"
        css={userCalloutStyle}
      >
        {user.emoji}
      </Callout>
      <div css={userTextStyle(isActive)}>{user.value}</div>
    </button>
  );
};
