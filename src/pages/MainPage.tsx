import { AIGift } from '@/components/feature/Home/AIGift';
import { GiftRanking } from '@/components/feature/Home/GiftRanking';
import { SelectFriend } from '@/components/feature/Home/SelectFriend';
import { ThemeCategory } from '@/components/feature/Home/ThemeCategory';

export default function MainPage() {
  return (
    <>
      <SelectFriend />
      <ThemeCategory />
      <AIGift />
      <GiftRanking />
    </>
  );
}
