import { GiftRankFilters } from '@/components/organisms/GiftRankFilters';
import { GiftRankItems } from '@/components/organisms/GiftRankItems';
import { GiftRankProvider } from '@/contexts/GiftRankContext';

export const GiftRankBox = () => {
  return (
    <GiftRankProvider>
      <GiftRankFilters />
      <GiftRankItems />
    </GiftRankProvider>
  );
};
