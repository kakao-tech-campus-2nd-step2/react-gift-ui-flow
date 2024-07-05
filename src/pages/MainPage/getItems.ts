import type { Item } from '@/pages/MainPage/types';

const getItem = (): Item[] => {
  return Array.from({ length: 30 }, () => ({
    imageSrc: `https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240328114550_e72d7854bfb649c68c6bea6a1b85262b.jpg`,
    subtitle: `오제티캔들`,
    title: `브이 햄스터 캔들 / 향초 선물 불멍`,
    amount: Math.floor(Math.random() * 40001) + 10000,
  }));
};

export default getItem;
