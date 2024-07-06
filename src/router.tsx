import React, { useContext } from 'react';
import { createBrowserRouter, Navigate, Outlet, redirect, useLocation } from 'react-router-dom';

import type { ItemProps } from '@/components/atoms/IContainer/types';
import type { RankingGoodsItemsProps } from '@/components/molecules/GoodsItem/Ranking';
import { ErrorPage } from '@/components/pages/ErrorPage';
import { LoginPage } from '@/components/pages/LoginPage';
import { HeaderFooterOutlet } from '@/components/templates/HeaderFooter/HeaderFooterOutlet';
import { MainTemplate } from '@/components/templates/MainTemplate';
import { MyPageTemplate } from '@/components/templates/MyPageTemplate';
import { ThemeTemplate } from '@/components/templates/ThemeTemplate';
import { AuthContext } from '@/contexts/AuthContext';

export const RouterPath = {
  root: '/',
  theme: '/theme/:themeKey',
  myAccount: '/my-account',
  login: '/login',
  notFound: '*',
};

const mockImageLoader = (): (RankingGoodsItemsProps & ItemProps)[] => {
  const item = {
    name: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: `BBQ 양념치킨+크림치즈볼+콜라1.25L`,
    amount: 29000,
  };

  const mockData: (RankingGoodsItemsProps & ItemProps)[] = [];

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

  const url = new URL(request.url);
  const previousPage = url.searchParams.get('previousPage') || '/';

  return redirect(previousPage);
}

const PrivateRoute = (): React.ReactElement => {
  const auth = useContext(AuthContext);
  const location = useLocation();

  /**
   * 마이페이지에서 로그아웃시 인덱스로 보내기
   *
   * 마이페이지로 들어오는 경로
   * 1. 헤더의 내 계정 버튼을 통해 navigate 되는 경로
   *
   * 2. 주소창에 /my-account 그냥 대입
   * 2-1) 마이페이지를 빨리 조회하고 싶은데 auth 때문에 리다이렉트 된 경우, 로그인하면 바로 마이페이지를 조회할 수 있게 하고 싶다. -> loginAction으로 구현
   *
   * logoutAction을 구현할 순 없을까?
   */
  if (
    auth?.name === undefined &&
    // 2-2에서 로그아웃
    ((location.state?._isRedirect && location.pathname === RouterPath.myAccount) ||
      // 1에서 로그아웃
      location.state?.previousPage)
  ) {
    return <Navigate to={RouterPath.root} />;
  }

  return auth.name ? (
    <Outlet />
  ) : (
    <Navigate to={RouterPath.login} state={{ previousPage: location.pathname }} />
  );
};

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
        element: <PrivateRoute />,
        children: [{ path: RouterPath.myAccount, element: <MyPageTemplate /> }],
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
