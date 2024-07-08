import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import type { ActionSpecificationButtonProps } from '@/components/molecules/ActionSpecificationButton';
import type { GroupSpecificationButtonProps } from '@/components/molecules/GroupSpecificationButton';
import { useGiftRankButtons } from '@/hooks/useGiftRankButtons';

export const GiftGroupButtons = createContext<GroupSpecificationButtonProps[]>([]);
export const GiftActionButtons = createContext<ActionSpecificationButtonProps[]>([]);
export const GiftSelectedGroupId = createContext<number>(0);
export const GiftSelectedActionId = createContext<number>(0);

export const GiftRankProvider = ({ children }: { children: ReactNode }) => {
  const [selectedGroupId, setSelectedGroupId] = useState<number>(0);
  const [selectedActionId, setSelectedActionId] = useState<number>(0);

  const { groupButtons, actionButtons } = useGiftRankButtons(
    setSelectedGroupId,
    setSelectedActionId,
  );

  return (
    <GiftGroupButtons.Provider value={groupButtons}>
      <GiftActionButtons.Provider value={actionButtons}>
        <GiftSelectedGroupId.Provider value={selectedGroupId}>
          <GiftSelectedActionId.Provider value={selectedActionId}>
            {children}
          </GiftSelectedActionId.Provider>
        </GiftSelectedGroupId.Provider>
      </GiftActionButtons.Provider>
    </GiftGroupButtons.Provider>
  );
};
