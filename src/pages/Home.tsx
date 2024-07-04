import BaseLayout from '@/layouts/BaseLayout';

import { RankSection } from '@/components/HomePage/RankSection';
import { ThemeSection } from '@/components/HomePage/ThemeSection';

export const HomePage = () => {
  return (
    <BaseLayout>
      <ThemeSection />
      <RankSection />
    </BaseLayout>
  );
};
