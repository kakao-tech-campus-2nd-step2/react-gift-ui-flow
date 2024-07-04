import { GiftFilterButons } from '@/data/filterData';

import { Callout } from '@/components/Callout';

import { ActiveGiftButton } from './ActiveGiftButton';
import { calloutStyle } from './styles';

export const RankFilterGift = () => {
  return (
    <Callout justifyContent="space-around" theme="skyblue" css={calloutStyle}>
      {GiftFilterButons.map((filter) => (
        <ActiveGiftButton key={filter.index} gift={filter.value} />
      ))}
    </Callout>
  );
};
