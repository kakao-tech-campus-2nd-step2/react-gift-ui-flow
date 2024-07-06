import useFetchGifts from '@hooks/useFetchGifts';
import { useState } from 'react';
import Container from '@components/atoms/container/Container';
import GiftDisplaySection from '@components/organisms/gift/GiftDisplaySection';
import { MAX_CONTENT_WIDTH } from '@styles/size';
import GroupFilterArea from '@components/organisms/main/ranking/GroupFilterArea';
import PopularityFilterArea from '@components/organisms/main/ranking/PopularityFilterArea';
import Button from '@components/atoms/button/Button';
import {
  RankingSectionTitle, RankingSectionTitleContainer,
} from '@components/organisms/main/ranking/RankingSection.styles';
import { GroupFilter, PopularityFilter } from '@/types';

function RankingSection() {
  const [groupFilter, setGroupFilter] = useState<GroupFilter>('all');
  const [popularityFilter, setPopularityFilter] = useState<PopularityFilter>('mostWanted');
  const [isFolded, setIsFolded] = useState(true);
  const themeFilter = 'all';

  const gifts = useFetchGifts({ groupFilter, popularityFilter, themeFilter });

  return (
    <Container elementSize="full-width" justifyContent="center">
      <Container
        elementSize="full-width"
        maxWidth={MAX_CONTENT_WIDTH}
        padding="0 16px 80px"
        flexDirection="column"
      >
        <RankingSectionTitleContainer>
          <RankingSectionTitle>
            실시간 급상승 선물랭킹
          </RankingSectionTitle>
        </RankingSectionTitleContainer>
        <GroupFilterArea currentFilter={groupFilter} setGroupFilter={setGroupFilter} />
        <PopularityFilterArea
          currentFilter={popularityFilter}
          setPopularityFilter={setPopularityFilter}
        />
        <Container padding="40px 0 20px">
          <GiftDisplaySection
            gifts={isFolded ? gifts.slice(0, 6) : gifts}
            maxColumns={6}
            minColumns={3}
            indexed
          />
        </Container>
        <Container elementSize="full-width" justifyContent="center">
          <Container elementSize="full-width" maxWidth="480px">
            <Button
              theme="lightGray"
              elementSize={{ width: '100%', height: '60px' }}
              text={isFolded ? '더보기' : '접기'}
              onClick={() => {
                setIsFolded(!isFolded);
              }}
            />
          </Container>
        </Container>
      </Container>
    </Container>
  );
}

export default RankingSection;
