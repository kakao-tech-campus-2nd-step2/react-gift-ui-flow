import { AIRecommendedGiftBanner } from '@/components/Home/AIRecommendedGiftBanner';
import { GiftRanking } from '@/components/Home/GiftRanking';
import { SelectFriend } from '@/components/Home/SelectFriend';
import { ThemeCategory } from '@/components/Home/ThemeCategory';

export default function MainPage() {
  return (
    <>
      <SelectFriend />
      <ThemeCategory />
      <AIRecommendedGiftBanner />
      <GiftRanking />
    </>
  );
}
