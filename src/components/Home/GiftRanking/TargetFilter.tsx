import styled from '@emotion/styled';

import type { Target } from '.';
import { Item } from './Item';

import { TARGET_FILTER_ITEMS } from '@/constant/Filter';

interface ITargetFilter {
  targetValue: Target;
  onTargetChange: (target: Target) => void;
}

export const TargetFilter = ({ targetValue, onTargetChange }: ITargetFilter) => {
  return (
    <List>
      {TARGET_FILTER_ITEMS.map((item) => (
        <Item
          key={item.text}
          icon={item.icon}
          text={item.text}
          targetValue={targetValue}
          onClick={() => onTargetChange(item.text)}
        />
      ))}
    </List>
  );
};
const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 40px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
