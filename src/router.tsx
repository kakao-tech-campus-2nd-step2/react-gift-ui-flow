import { createBrowserRouter, redirect } from 'react-router-dom';

import type { RankingGoodsItemsProps } from '@/components/molecules/GoodsItem/Ranking';
import type { IteratingItemProp } from '@/components/molecules/types/IteratingItemProp';
import { ErrorPage } from '@/components/pages/ErrorPage';
import { LoginPage } from '@/components/pages/LoginPage';
import { HeaderFooterOutlet } from '@/components/templates/HeaderFooter/HeaderFooterOutlet';
import { MainTemplate } from '@/components/templates/MainTemplate';
import { MyPageTemplate } from '@/components/templates/MyPageTemplate';
import { ThemeTemplate } from '@/components/templates/ThemeTemplate';

export const RouterPath = {
  root: '/',
  theme: '/theme/:themeKey',
  myPage: '/my-account',
  login: '/login',
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

// onSubmit 이후에 실행됨
export async function loginAction({
  request,
  // params,
}: {
  request: Request;
  // params?: Params<string>;
}) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const { id } = updates;
  sessionStorage.setItem('authToken', JSON.stringify({ name: id }));

  return redirect(RouterPath.root);
}

export const router = createBrowserRouter([
  {
    path: RouterPath.root,
    element: <HeaderFooterOutlet />,
    children: [
      {
        index: true,
        loader: mockImageLoader,
        element: <MainTemplate />,
      },
      {
        path: RouterPath.theme,
        loader: mockImageLoader,
        element: <ThemeTemplate />,
      },
      {
        path: RouterPath.myPage,
        element: <MyPageTemplate />,
      },
    ],
  },
  {
    path: RouterPath.login,
    action: loginAction,
    element: <LoginPage />,
  },
  {
    path: RouterPath.notFound,
    element: <ErrorPage />,
  },
]);
