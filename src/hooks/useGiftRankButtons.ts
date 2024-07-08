import type { MouseEventHandler } from 'react';
import { useMemo } from 'react';

import type { ActionSpecificationButtonProps } from '@/components/molecules/ActionSpecificationButton';
import type { GroupSpecificationButtonProps } from '@/components/molecules/GroupSpecificationButton';

const groupButtonsFragments = [
  {
    asciiLogo: 'ALL',
    pContent: '전체',
  },
  {
    asciiLogo: '👩🏻‍🦳',
    pContent: '여성이',
  },
  {
    asciiLogo: '👨🏻‍🦳',
    pContent: '남성이',
  },
  {
    asciiLogo: '👦🏻',
    pContent: '청소년이',
  },
];

const actionButtonsFragments = [
  {
    pContent: '받고 싶어한',
  },
  {
    pContent: '많이 선물한',
  },
  {
    pContent: '위시로 받은',
  },
];

function bindIdAndSelect(
  setState: React.Dispatch<React.SetStateAction<number>>,
): (id: number) => React.MouseEventHandler {
  return function (id: number): MouseEventHandler {
    return function () {
      setState(id);
    };
  };
}

function createVirtualGroupButtons(
  bindId: (id: number) => React.MouseEventHandler,
): GroupSpecificationButtonProps[] {
  return groupButtonsFragments.map((item, idx) => ({
    ...item,
    id: idx,
    onClick: bindId(idx),
  }));
}

function createVirtualActionButtons(
  bindId: (id: number) => React.MouseEventHandler,
): ActionSpecificationButtonProps[] {
  return actionButtonsFragments.map((item, idx) => ({
    ...item,
    id: idx,
    onClick: bindId(idx),
  }));
}

export function useGiftRankButtons(
  setSelectedGroupId: React.Dispatch<React.SetStateAction<number>>,
  setSelectedActionId: React.Dispatch<React.SetStateAction<number>>,
) {
  const groupButtons = useMemo(
    () => createVirtualGroupButtons(bindIdAndSelect(setSelectedGroupId)),
    [setSelectedGroupId],
  );
  const actionButtons = useMemo(
    () => createVirtualActionButtons(bindIdAndSelect(setSelectedActionId)),
    [setSelectedActionId],
  );

  return { groupButtons, actionButtons };
}
