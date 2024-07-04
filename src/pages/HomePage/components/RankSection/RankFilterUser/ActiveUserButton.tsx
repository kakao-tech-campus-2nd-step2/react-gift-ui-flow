import { ButtonHTMLAttributes } from 'react';

import { useFilter } from '@/context/filter/useFilter';
import { UserFilterButtonType } from '@/types/rankTypes';

import { Callout } from '@/components/ui/Callout';

import { buttonStyle, calloutStyle, textStyle } from './styles';

interface ActiveUserButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  user: UserFilterButtonType;
}

export const ActiveUserButton = ({ user, ...props }: ActiveUserButtonProps) => {
  const { userFilter, setUserFilter } = useFilter();

  const isActive = user.value === userFilter;
  const onClick = () => setUserFilter(user.value);

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
