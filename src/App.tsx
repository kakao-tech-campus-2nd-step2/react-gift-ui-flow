import BaseLayout from '@/components/BaseLayout/BaseLayout';
import { ThemeFooter } from '@/components/ThemeSection/ThemeFooter';
import { ThemeHeader } from '@/components/ThemeSection/ThemeHeader';
import { ThemeList } from '@/components/ThemeSection/ThemeList/ThemeList';

const App = () => {
  return (
    <BaseLayout style={{ height: '2000px' }}>
      <ThemeHeader />
      <ThemeList />
      <ThemeFooter />
    </BaseLayout>
  );
};

export default App;
