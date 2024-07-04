import { useParams } from 'react-router-dom';

import BaseLayout from '@/layouts/BaseLayout';
import { themeHeaderData, themeListData } from '@/mocks/mockData';

import { ThemeContent } from '@/components/ThemePage/ThemeContent';
import { ThemeHeader } from '@/components/ThemePage/ThemeHeader';

export const ThemePage = () => {
  const { themeKey } = useParams();
  const testHeader = themeHeaderData[Number(themeKey)];

  const { themeTitle } = testHeader;
  const testContent = themeListData[themeTitle];

  return (
    <BaseLayout>
      <ThemeHeader contents={testHeader} />
      <ThemeContent items={testContent} />
    </BaseLayout>
  );
};
