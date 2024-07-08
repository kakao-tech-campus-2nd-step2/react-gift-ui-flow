import { Dispatch, SetStateAction } from 'react';

import { GiftContents } from '@/pages/HomePage/data/filterButton';
import { GiftFilterType } from '@/types/rankTypes';

import { Callout } from '@/components/Callout';

import { ActiveGiftButton } from './ActiveGiftButton';
import { calloutStyle } from './styles';

type RankFilterGiftProps = {
  giftFilter: GiftFilterType;
  setGiftFilter: Dispatch<SetStateAction<GiftFilterType>>;
};

export const RankFilterGift = ({
  giftFilter,
  setGiftFilter,
}: RankFilterGiftProps) => {
  return (
    <Callout justifyContent="space-around" theme="skyblue" css={calloutStyle}>
      {GiftContents.map((filter) => (
        <ActiveGiftButton
          key={filter.index}
          gift={filter.value}
          isActive={filter.value === giftFilter}
          onClick={() => setGiftFilter(filter.value)}
        />
      ))}
    </Callout>
  );
};
