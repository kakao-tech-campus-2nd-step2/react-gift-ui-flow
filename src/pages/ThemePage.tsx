import { useParams } from 'react-router-dom';

import { HeaderSection } from '@/components/Theme/HeaderSection';
import { ItemList } from '@/components/Theme/ItmeList';

export default function ThemePage() {
  const { themeKey = '' } = useParams<{ themeKey: string }>();
  return (
    <>
      <HeaderSection path={themeKey} />
      <ItemList />
    </>
  );
}
