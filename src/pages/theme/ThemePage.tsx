import { useParams } from 'react-router-dom';
import GiftSection from './components/gift-section';
import TitleSection from './components/title-section';

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
