import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Banner } from '@/components/common/Banner/Banner';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';
import GoodsList from '@/components/ThemeComponents/GoodsList';

import type { ThemeKey } from './theme.value';
import { THEME_HEADERS } from './theme.value';

const ThemePage = () => {
  const { themeKey } = useParams<{ themeKey: string }>();
  const [bannerProps, setBannerProps] = useState(THEME_HEADERS.Birthday);

  useEffect(() => {
    if (themeKey && THEME_HEADERS[themeKey as ThemeKey]) {
      setBannerProps(THEME_HEADERS[themeKey as ThemeKey]);
    } else {
      setBannerProps(THEME_HEADERS.Default);
    }
  }, [themeKey]);

  return (
    <>
      <Header />
      <Banner {...bannerProps} />
      <GoodsList />
      <Footer />
    </>
  );
};

export default ThemePage;
