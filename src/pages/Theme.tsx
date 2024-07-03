import { themeHeaderData } from '@/mocks/mockData';

import BaseLayout from '@/components/BaseLayout/BaseLayout';
import { ThemeHeader } from '@/components/ThemePage/ThemeHeader';

export const ThemePage = () => {
  const testData = themeHeaderData[0];

  return (
    <BaseLayout>
      <ThemeHeader contents={testData} />
    </BaseLayout>
  );
};
