import { AiDiscoveryBanner } from '@/components/features/Home/AiDiscoveryBanner';
// import { GoodsRankingSection } from '@/components/features/Home/GoodsRankingSection';
import { SelectFriendsBanner } from '@/components/features/Home/SelectFriendsBanner';
// import { ThemeCategorySection } from '@/components/features/Home/ThemeCategorySection';

export const Home = () => {
  return (
    <>
      <SelectFriendsBanner />
      {/* <ThemeCategorySection /> */}
      <AiDiscoveryBanner />
      {/* <GoodsRankingSection /> */}
    </>
  );
};
