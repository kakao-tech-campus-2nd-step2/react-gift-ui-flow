import BaseLayout from '@/components/BaseLayout/BaseLayout';
import { RankSection } from '@/components/RankSection/RankSection';
import { ThemeSection } from '@/components/ThemeSection/ThemeSection';

const App = () => {
  return (
    <BaseLayout style={{ height: '2000px' }}>
      <ThemeSection />
      <RankSection />
    </BaseLayout>
  );
};

export default App;
