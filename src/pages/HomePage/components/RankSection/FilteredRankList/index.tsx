import { useVisibleList } from '@/pages/HomePage/hooks/useFilteredList';
import { useVisibleCount } from '@/pages/HomePage/hooks/useVisibleCount';
import {
  FilterRankItemType,
  GiftFilterType,
  UserFilterType,
} from '@/types/rankTypes';

import { Container } from '@/components/ui/Layout/Container';

import { RankList } from './RankList';
import { ShowMoreButton } from './ShowMoreButton';

type RankListContentProps = {
  filteredList: FilterRankItemType[];
  userFilter: UserFilterType;
  giftFilter: GiftFilterType;
};

export const FilteredRankList = ({
  filteredList,
  userFilter,
  giftFilter,
}: RankListContentProps) => {
  const { visibleItems, visibleItemCount, setVisibleItemCount } =
    useVisibleList(filteredList, userFilter, giftFilter);
  const { isExpanded, handleShowLess, handleShowMore } = useVisibleCount(
    filteredList.length,
    visibleItemCount,
    setVisibleItemCount
  );

  const text = isExpanded ? '접기' : '더보기';
  const onClick = isExpanded ? handleShowLess : handleShowMore;

  return (
    <Container flexDirection="column" gap="2rem">
      <RankList filteredList={visibleItems} />
      <ShowMoreButton text={text} onClick={onClick} />
    </Container>
  );
};
