import BaseLayout from '@/components/BaseLayout/BaseLayout';
import { RankSection } from '@/components/RankSection/RankSection';
import { ThemeSection } from '@/components/ThemeSection/ThemeSection';

export const HomePage = () => {
  return (
    <BaseLayout>
      <ThemeSection />
      <RankSection />
    </BaseLayout>
  );
};
