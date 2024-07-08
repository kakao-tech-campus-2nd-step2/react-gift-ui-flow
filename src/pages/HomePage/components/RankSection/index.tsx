import { useRankFilters } from '@/pages/HomePage/hooks/useRankFilters';
import { getFilteredRankItem } from '@/pages/HomePage/utils/getFilteredRankItem';

import { Content } from '@/components/Content';

import { FilteredRankList } from './FilteredRankList';
import { RankFilterGift } from './RankFilterGift';
import { RankFilterUser } from './RankFilterUser';
import { RankTitle } from './RankTitle';

export const RankSection = () => {
  const { userFilter, giftFilter, setUserFilter, setGiftFilter } =
    useRankFilters();
  const filteredList = getFilteredRankItem(userFilter, giftFilter);

  return (
    <Content flexDirection="column" height="fit-content" gap="2rem">
      <RankTitle />
      <RankFilterUser userFilter={userFilter} setUserFilter={setUserFilter} />
      <RankFilterGift giftFilter={giftFilter} setGiftFilter={setGiftFilter} />
      <FilteredRankList
        filteredList={filteredList}
        userFilter={userFilter}
        giftFilter={giftFilter}
      />
    </Content>
  );
};
