import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

import styles from './RankingSection.module.scss';

const RankingSection = () => {
  const totalItems = 21; // 전체 아이템 개수
  const itemsPerPage = 6; // 페이지당 보여질 아이템 개수

  const [visibleItems, setVisibleItems] = useState(itemsPerPage);

  const handleShowMore = () => {
    // 더보기 버튼 클릭 시 추가 아이템을 보여주거나 전체 아이템 개수만큼 보여줍니다.
    setVisibleItems(totalItems);
  };

  const handleFold = () => {
    // 접기 버튼 클릭 시 초기 설정으로 돌아갑니다 (6개의 아이템만 보여짐).
    setVisibleItems(itemsPerPage);
  };
  return (
    <div className={styles.ranking}>
      <h1>실시간 급상승 선물랭킹</h1>
      <div>카테고리</div>
      <div className={styles.rankingList}>
        <Grid columns={4} gap={15} className={styles.rankingGrid}>
          {[...Array(visibleItems)].map((_, index) => (
            <RankingGoodsItems
              key={index}
              rankingIndex={index + 1}
              imageSrc="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
              subtitle="BBQ"
              title="BBQ 양념치킨+크림치즈볼+콜라1.25L"
              amount={29000}
            />
          ))}
        </Grid>
      </div>
      {visibleItems > itemsPerPage && ( // 현재 보이는 아이템이 초기 설정보다 많으면 접기 버튼을 보여줍니다.
        <Button theme="outline" onClick={handleFold} className={styles.rankingButton}>
          접기
        </Button>
      )}
      {visibleItems < totalItems && ( // 전체 아이템 개수보다 적으면 더보기 버튼을 보여줍니다.
        <Button theme="outline" onClick={handleShowMore} className={styles.rankingButton}>
          더보기
        </Button>
      )}
    </div>
  );
};

export default RankingSection;
