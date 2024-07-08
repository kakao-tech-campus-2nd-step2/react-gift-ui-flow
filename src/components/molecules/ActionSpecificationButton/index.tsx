import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';
import { useContext } from 'react';

import { GiftSelectedActionId } from '@/contexts/GiftRankContext';

export type ActionSpecificationButtonProps = {
  id: number;
  pContent: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const ActionSpecificationButton = ({
  pContent,
  id,
  onClick = () => {},
  ...props
}: ActionSpecificationButtonProps) => {
  const selectedId = useContext(GiftSelectedActionId);

  return (
    <ActionSpecificationButtonWrapper selected={id === selectedId} onClick={onClick} {...props}>
      {pContent}
    </ActionSpecificationButtonWrapper>
  );
};

type SelectProp = {
  selected: boolean;
};

const ActionSpecificationButtonWrapper = styled.button<SelectProp>`
  color: ${({ selected }) => (selected ? '#4684e9' : 'rgba(70, 132, 233, 0.7)')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  transition:
    color 200ms,
    font-weight 200ms;
  &:focus {
    outline: none;
  }
  padding: 20px 30px;
  font-size: 22px;
  line-height: 22px;
`;
