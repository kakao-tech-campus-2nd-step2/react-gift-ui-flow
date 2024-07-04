import styled from '@emotion/styled';
import type { MouseEventHandler } from 'react';
import { useContext } from 'react';

import { GiftSelectedGroupId } from '@/components/contexts/GiftRankContext';

export type GroupSpecificationButtonProps = {
  id: number;
  asciiLogo: string;
  pContent: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const GroupSpecificationButton = ({
  id,
  asciiLogo,
  pContent,
  onClick,
}: GroupSpecificationButtonProps) => {
  const selectedId = useContext(GiftSelectedGroupId);
  const isSelected = selectedId === id;

  return (
    <GroupSpecificationButtonWrapper onClick={onClick}>
      <Face selected={isSelected}>{asciiLogo}</Face>
      <BlueParagraph selected={isSelected}>{pContent}</BlueParagraph>
    </GroupSpecificationButtonWrapper>
  );
};

const GroupSpecificationButtonWrapper = styled.button`
  width: 100%;
  min-width: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & + & {
    padding-left: 16px;
  }
  &:focus {
    outline: none;
  }
`;

type SelectProp = {
  selected: boolean;
};

const Face = styled.div<SelectProp>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  background-color: ${({ selected }) => (selected ? '#4684e9' : '#e6f1ff')};
  transition: background-color 200ms;
  width: 60px;
  height: 60px;
  border-radius: 24px;
  font-size: 20px;
`;

const BlueParagraph = styled.p<SelectProp>`
  color: ${({ selected }) => (selected ? '#4684e9' : '#666')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};
  transition:
    color 200ms,
    font-weight 200ms;
  padding: 10px 0 6px;
  font-size: 20px;
  line-height: 24px;
`;
