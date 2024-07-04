import { FilterProvider } from '@/context/filter/FilterProvider';
import { RankListProvider } from '@/context/rankList/RankListProvider';

import { Content } from '@/components/Content';

import { RankFilterGift } from './RankFilterGift';
import { RankFilterUser } from './RankFilterUser';
import { RankList } from './RankList';
import { RankTitle } from './RankTitle';
import { ShowMoreButton } from './ShowMoreButton';

export const RankSection = () => {
  return (
    <FilterProvider>
      <Content flexDirection="column" height="fit-content" gap="2rem">
        <RankTitle />
        <RankFilterUser />
        <RankFilterGift />
        <RankListProvider>
          <RankList />
          <ShowMoreButton />
        </RankListProvider>
      </Content>
    </FilterProvider>
  );
};
