import { useState } from 'react';

import { Button } from '@/components/common/Button';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

import styles from './RankingSection.module.scss';

const RankingCategory = () => {
  const [category, setCategory] = useState('전체');
  const categories = ['전체', '여성이', '남성이', '청소년이'];

  const handleCategory = (cat: string) => {
    setCategory(cat);
  };

  return (
    <div className={styles.category}>
      {categories.map((item) => (
        <div onClick={() => handleCategory(item)} className={styles.icon}>
          <div className={[styles.itemIcon, category === item ? styles.activeIcon : ''].join(' ')}>
            {item === '전체' ? 'ALL' : item === '여성이' ? '👩🏻' : item === '남성이' ? '👨🏻' : '👦🏻'}
          </div>
          <div
            className={[styles.categoryItem, category === item ? styles.activeItem : ''].join('')}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};

const CategoryChoosing = () => {
  const [choosing, setChoosing] = useState('받고 싶어한');
  const categories = ['받고 싶어한', '많이 선물한', '위시로 받은'];

  const handleChoosing = (choose: string) => {
    setChoosing(choose);
  };

  return (
    <div className={styles.chooseOne}>
      {categories.map((item) => (
        <div onClick={() => handleChoosing(item)} className={styles.chooseIcon}>
          <div
            className={[styles.chooseItem, choosing === item ? styles.chooseActive : ''].join('')}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
};
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
      <RankingCategory />
      <CategoryChoosing />
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
