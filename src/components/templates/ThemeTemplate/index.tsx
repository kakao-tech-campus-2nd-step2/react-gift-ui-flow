import { Fragment } from 'react';

import type { Theme } from '@/components/organisms/ThemedBanner';
import { ThemedBanner } from '@/components/organisms/ThemedBanner';
import { ThemedItemsSection } from '@/components/organisms/ThemedItemsSection';

export const themeMap = new Map<string, Theme>();

themeMap.set('life_small_gift', {
  label: '가벼운 선물',
  title: '예산은 가볍게, 감동은 무겁게❤️',
  description: '당신의 센스를 뽐내줄 부담 없는 선물',
  backgroundColor: '#4b4d50',
});

export const ThemeTemplate = () => {
  return (
    <Fragment>
      <ThemedBanner />
      <ThemedItemsSection />
    </Fragment>
  );
};
