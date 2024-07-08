import { Category } from '@/Home/Category';
import { FriendBanner } from '@/Home/FriendBanner';
import GiftRankingPage from '@/Home/RankingItem/index';
import { SuggestBanner } from '@/Home/SuggestBanner';

export const HomePage = () => {
  return (
    <>
      <FriendBanner />
      <Category />
      <SuggestBanner />
      <GiftRankingPage />
    </>
  );
};
