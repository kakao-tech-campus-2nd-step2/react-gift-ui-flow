import useFetchGifts from '@hooks/useFetchGifts';
import { useState } from 'react';
import Container from '@components/atoms/container/Container';
import GiftDisplaySection from '@components/organisms/gift/GiftDisplaySection';
import { MAX_CONTENT_WIDTH } from '@styles/size';
import GroupFilterArea from '@components/organisms/main/ranking/GroupFilterArea';
import PopularityFilterArea from '@components/organisms/main/ranking/PopularityFilterArea';
import { css } from '@emotion/react';
import Button from '@components/atoms/button/Button';
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
        cssProps={{ padding: '0 16px 80px' }}
        flexDirection="column"
      >
        <Container cssProps={{ justifyContent: 'center' }}>
          <h1 css={css`
            font-size: 35px;
            line-height: 50px;
            font-weight: bold;
          `}
          >
            실시간 급상승 선물랭킹
          </h1>
        </Container>
        <GroupFilterArea currentFilter={groupFilter} setGroupFilter={setGroupFilter} />
        <PopularityFilterArea
          currentFilter={popularityFilter}
          setPopularityFilter={setPopularityFilter}
        />
        <Container cssProps={{ padding: '40px 0 20px' }}>
          <GiftDisplaySection gifts={isFolded ? gifts.slice(0, 6) : gifts} maxColumns={6} indexed />
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
