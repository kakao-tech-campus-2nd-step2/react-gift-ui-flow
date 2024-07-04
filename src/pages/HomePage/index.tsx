import { FilterProvider } from '@/context/filter/FilterProvider';
import BaseLayout from '@/layouts/BaseLayout';

import { RankSection } from './components/RankSection';
import { ThemeSection } from './components/ThemeSection';

export const HomePage = () => {
  return (
    <BaseLayout>
      <ThemeSection />
      <FilterProvider>
        <RankSection />
      </FilterProvider>
    </BaseLayout>
  );
};
