import type { Item } from '@/pages/ThemePage/types'; 

const getItmes = (): Item[] => {
  const item: Item = {
    imageSrc: `https://img1.kakaocdn.net/thumb/C305x305@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240627200427_f4e2633abe374cbca82c931bb60f331f.jpg`,
    subtitle: `조말론런던`,
    title: `[단독/리미티드선물포장] 코롱 9ML`,
    amount: 32000,
  };
  return Array.from({ length: 30 }, () => item);
};

export default getItmes;
