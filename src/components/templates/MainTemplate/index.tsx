import { Fragment } from 'react';

import { FriendBanner } from '@/components/organisms/FriendBanner';
import { KaKaoAiRecommendation } from '@/components/organisms/KaKaoAiRecommendationBanner';
import { ThemeCategories } from '@/components/organisms/ThemeCategories';
import { GiftRankBox } from '@/components/templates/GiftRankBox';

export const MainTemplate = () => {
  return (
    <Fragment>
      <FriendBanner />
      <ThemeCategories />
      <KaKaoAiRecommendation />
      <GiftRankBox />
    </Fragment>
  );
};
