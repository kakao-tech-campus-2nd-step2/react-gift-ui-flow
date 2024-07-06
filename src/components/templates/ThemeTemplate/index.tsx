import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

import { ThemedBanner } from '@/components/organisms/ThemedBanner';
import { ThemedItemsSection } from '@/components/organisms/ThemedItemsSection';

const themeKeys = ['life_small_gift'] as const;

export type ThemeKeyType = (typeof themeKeys)[number];

export type ThemeProps = {
  themeKey: ThemeKeyType;
};

export function isValidThemeKey(themeKey: string): themeKey is ThemeKeyType {
  let isValid = false;

  for (const type of themeKeys) {
    isValid = isValid || themeKey === type;
  }

  return isValid;
}

export type Theme = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
};

export const themeMap = new Map<string, Theme>();

themeMap.set('life_small_gift', {
  label: '가벼운 선물',
  title: '예산은 가볍게, 감동은 무겁게❤️',
  description: '당신의 센스를 뽐내줄 부담 없는 선물',
  backgroundColor: '#4b4d50',
});

export const ThemeTemplate = () => {
  const { themeKey } = useParams();

  // useEffect(() => {
  //   if (!isValidThemeKey(themeKey as string)) {
  //     navigate(RouterPath.root);
  //   }
  // });

  return isValidThemeKey(themeKey as string) ? (
    <Fragment>
      <ThemedBanner themeKey={themeKey as ThemeKeyType} />
      <ThemedItemsSection />
    </Fragment>
  ) : null;
};
