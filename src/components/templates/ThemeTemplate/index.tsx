import { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import type { Theme, ThemeKeyType } from '@/components/organisms/ThemedBanner';
import { isValidThemeKey, ThemedBanner } from '@/components/organisms/ThemedBanner';
import { ThemedItemsSection } from '@/components/organisms/ThemedItemsSection';
import { RouterPath } from '@/router';

export const themeMap = new Map<string, Theme>();

themeMap.set('life_small_gift', {
  label: '가벼운 선물',
  title: '예산은 가볍게, 감동은 무겁게❤️',
  description: '당신의 센스를 뽐내줄 부담 없는 선물',
  backgroundColor: '#4b4d50',
});

export const ThemeTemplate = () => {
  const navigate = useNavigate();
  const { themeKey } = useParams();

  useEffect(() => {
    if (!isValidThemeKey(themeKey as string)) {
      navigate(RouterPath.root);
    }
  });

  return isValidThemeKey(themeKey as string) ? (
    <Fragment>
      <ThemedBanner themeKey={themeKey as ThemeKeyType} />
      <ThemedItemsSection />
    </Fragment>
  ) : null;
};
