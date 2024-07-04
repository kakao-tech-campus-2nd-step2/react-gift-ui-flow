import BaseLayout from '@/layouts/BaseLayout';

import { RankSection } from './components/RankSection';
import { ThemeSection } from './components/ThemeSection';

export const HomePage = () => {
  return (
    <BaseLayout>
      <ThemeSection />
      <RankSection />
    </BaseLayout>
  );
};
