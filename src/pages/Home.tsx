import BaseLayout from '@/components/BaseLayout/BaseLayout';
import { RankSection } from '@/components/HomePage/RankSection/RankSection';
import { ThemeSection } from '@/components/HomePage/ThemeSection/ThemeSection';

export const HomePage = () => {
  return (
    <BaseLayout>
      <ThemeSection />
      <RankSection />
    </BaseLayout>
  );
};
