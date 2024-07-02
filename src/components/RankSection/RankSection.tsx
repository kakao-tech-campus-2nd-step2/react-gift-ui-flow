import { FilterProvider } from '@/context/filter/FilterProvider';

import { Content } from '@/components/ui/Layout/Content';

import { RankTitle } from './RankTitle';
import { GiftFilter } from './filter/GiftFilter';
import { UserFilter } from './filter/UserFilter';

export const RankSection = () => {
  return (
    <FilterProvider>
      <Content flexDirection="column" height="fit-content" gap="2rem">
        <RankTitle />
        <UserFilter />
        <GiftFilter />
      </Content>
    </FilterProvider>
  );
};
