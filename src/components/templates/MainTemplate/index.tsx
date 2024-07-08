import { FlatFlex } from '@/components/atoms/FlatFlex';
import { ContainerDirectionType } from '@/components/atoms/FlatFlex/types';
import { Margin0Auto } from '@/components/atoms/Margin0Auto';
import { FriendBanner } from '@/components/organisms/FriendBanner';
import { KaKaoAiRecommendation } from '@/components/organisms/KaKaoAiRecommendationBanner';
import { ThemeCategories } from '@/components/organisms/ThemeCategories';
import { GiftRankBox } from '@/components/templates/GiftRankBox';

export const MainTemplate = () => {
  return (
    <Margin0Auto limitMaxWidth={true}>
      <FlatFlex flexDirection={ContainerDirectionType.column}>
        <FriendBanner />
        <ThemeCategories />
        <KaKaoAiRecommendation />
        <GiftRankBox />
      </FlatFlex>
    </Margin0Auto>
  );
};
