import { createBrowserRouter } from 'react-router-dom';

import type { RankingGoodsItemsProps } from '@/components/molecules/GoodsItem/Ranking';
import type { IteratingItemProp } from '@/components/molecules/types/IteratingItemProp';
import { ErrorPage } from '@/components/pages/ErrorPage';
import { HeaderFooterOutlet } from '@/components/templates/HeaderFooter/HeaderFooterOutlet';
import { MainTemplate } from '@/components/templates/MainTemplate';

export const RouterPath = {
  root: '/',
  theme: '/theme/:themeKey',
  myPage: 'my-account',
  login: 'login',
  notFound: '*',
};

const mockImageLoader = (): (RankingGoodsItemsProps & IteratingItemProp)[] => {
  const item = {
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: `BBQ 양념치킨+크림치즈볼+콜라1.25L`,
    amount: 29000,
  };

  const mockData: (RankingGoodsItemsProps & IteratingItemProp)[] = [];

  for (let i = 0; i < 21; i++) {
    mockData.push({ rankingIndex: i + 1, ...item, id: `${i}` });
  }

  return mockData;
};

export const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <HeaderFooterOutlet />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: mockImageLoader,
        element: <MainTemplate />,
      },
      {
        path: RouterPath.theme,
      },
    ],
  },
]);
