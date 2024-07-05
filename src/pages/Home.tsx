import { SelectFriendsBanner } from '@/components/features/Home/SelectFriendsBanner';
import { ThemeCategorySection } from '@/components/features/Home/ThemeCategorySection';
import { AiDiscoveryBanner } from '@/components/features/Home/AiDiscoveryBanner';
import { GoodsRankingSection } from '@/components/features/Home/GoodsRankingSection';

export const Home = () => {
  return (
    <>
      <SelectFriendsBanner />
      <ThemeCategorySection />
      <AiDiscoveryBanner />
      <GoodsRankingSection />
    </>
  );
};
