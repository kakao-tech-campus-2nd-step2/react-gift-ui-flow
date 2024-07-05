import { useParams } from 'react-router-dom';
import GiftSection from './components/GiftSection';
import TitleSection from './components/TitleSection';

const ThemePage = () => {
  const GiftPath = useParams();
  return (
    <>
      <TitleSection pathData={GiftPath.themeKey as string} />
      <GiftSection />
    </>
  );
};

export default ThemePage;
