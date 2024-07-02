import { ThemeFooter } from './ThemeFooter';
import { ThemeHeader } from './ThemeHeader';
import { ThemeList } from './ThemeList/ThemeList';

export const ThemeSection = () => {
  return (
    <>
      <ThemeHeader />
      <ThemeList />
      <ThemeFooter />
    </>
  );
};
