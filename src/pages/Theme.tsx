import { themeHeaderData, themeListData } from '@/mocks/mockData';

import BaseLayout from '@/components/BaseLayout/BaseLayout';
import { ThemeContent } from '@/components/ThemePage/ThemeContent';
import { ThemeHeader } from '@/components/ThemePage/ThemeHeader';

export const ThemePage = () => {
  const testHeader = themeHeaderData[0];
  const { themeTitle } = testHeader;
  const testContent = themeListData[themeTitle];

  return (
    <BaseLayout>
      <ThemeHeader contents={testHeader} />
      <ThemeContent items={testContent} />
    </BaseLayout>
  );
};
