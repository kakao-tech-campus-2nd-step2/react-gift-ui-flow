import BaseLayout from '@/layouts/BaseLayout';

import { BannerBottom } from './components/BannerBottom';
import { BannerTop } from './components/BannerTop';
import { RankSection } from './components/RankSection';
import { ThemeList } from './components/ThemeSection/ThemeList';

export const HomePage = () => {
  return (
    <BaseLayout>
      <BannerTop />
      <ThemeList />
      <BannerBottom />
      <RankSection />
    </BaseLayout>
  );
};
