import { useParams } from 'react-router-dom';

import { HeaderSection } from '@/components/feature/Theme/HeaderSection';
import { ItemList } from '@/components/feature/Theme/ItmeList';

export default function ThemePage() {
  const { themeKey = '' } = useParams<{ themeKey: string }>();
  return (
    <>
      <HeaderSection path={themeKey} />
      <ItemList />
    </>
  );
}
