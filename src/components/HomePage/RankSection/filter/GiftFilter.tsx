import { useFilter } from '@/context/filter/useFilter';
import { GiftFilterButons } from '@/data/filterData';
import { GiftFilterType } from '@/types/rankTypes';

import { Callout } from '@/components/ui/Callout/Callout';

import { ActiveGiftButton } from './ActiveGiftButton';
import { buttonContainerStyle } from './styles';

export const GiftFilter = () => {
  const { giftFilter, setGiftFilter } = useFilter();
  const giftFilters: GiftFilterType[] = GiftFilterButons;

  return (
    <Callout
      justifyContent="space-around"
      theme="skyblue"
      css={buttonContainerStyle}
    >
      {giftFilters.map((value) => (
        <ActiveGiftButton
          key={value}
          gift={value}
          isActive={value === giftFilter}
          onClick={() => setGiftFilter(value)}
        />
      ))}
    </Callout>
  );
};
