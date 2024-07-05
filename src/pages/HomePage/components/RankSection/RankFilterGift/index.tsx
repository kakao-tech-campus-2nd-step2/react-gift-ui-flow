import { GiftContents } from '@/pages/HomePage/data/filterButton';

import { Callout } from '@/components/Callout';

import { ActiveGiftButton } from './ActiveGiftButton';
import { calloutStyle } from './styles';

export const RankFilterGift = () => {
  return (
    <Callout justifyContent="space-around" theme="skyblue" css={calloutStyle}>
      {GiftContents.map((filter) => (
        <ActiveGiftButton key={filter.index} gift={filter.value} />
      ))}
    </Callout>
  );
};
