import { FilterProvider } from '@/context/filter/FilterProvider';
import { RankListProvider } from '@/context/rankList/RankListProvider';

import { Content } from '@/components/ui/Layout/Content';

import { RankList } from './RankList';
import { RankTitle } from './RankTitle';
import { ShowMoreButton } from './ShowMoreButon';
import { GiftFilter } from './filter/GiftFilter';
import { UserFilter } from './filter/UserFilter';

export const RankSection = () => {
  return (
    <FilterProvider>
      <Content flexDirection="column" height="fit-content" gap="2rem">
        <RankTitle />
        <UserFilter />
        <GiftFilter />
        <RankListProvider>
          <RankList />
          <ShowMoreButton />
        </RankListProvider>
      </Content>
    </FilterProvider>
  );
};
