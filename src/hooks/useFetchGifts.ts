import { useEffect, useState } from 'react';
import { Gift } from '@dto/Gift';
import { GiftThemeKey, GroupFilter, PopularityFilter } from '@/types';

interface FetchParams {
  groupFilter?: GroupFilter;
  popularityFilter?: PopularityFilter;
  themeFilter?: 'all' | GiftThemeKey;
}

function useFetchGifts({ groupFilter, popularityFilter, themeFilter }: FetchParams) {
  const [gifts, setGifts] = useState<Gift[]>([]);
  useEffect(() => {
    // 올바르지 않은 필터값일 경우 예외처리
    const fetchedGifts = [];

    for (let i = 0; i < 16; i += 1) {
      fetchedGifts.push({
        imageSrc:
          'https://picsum.photos/300',
        subtitle: '이건 선물일까 그냥 이미지일까?',
        title:
          '선물 테스트',
        amount: 100000,
      });
    }

    setGifts(fetchedGifts);
  }, [groupFilter, popularityFilter, themeFilter]);

  return gifts;
}

export default useFetchGifts;
