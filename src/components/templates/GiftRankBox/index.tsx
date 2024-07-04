import { GiftRankProvider } from '@/components/contexts/GiftRankContext';
import { GiftRankFilters } from '@/components/organisms/GiftRankFilters';
import { GiftRankItems } from '@/components/organisms/GiftRankItems';

export const GiftRankBox = () => {
  return (
    <GiftRankProvider>
      <GiftRankFilters />
      <GiftRankItems />
    </GiftRankProvider>
  );
};
