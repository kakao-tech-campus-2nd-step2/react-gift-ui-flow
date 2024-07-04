export const ROUTE_PATHS = {
  ROOT: '/',
  THEME: '/theme/:themekey',
  LOGIN: '/login',
  MYPAGE: '/my-account',
};
export const getDynamicRoute = {
  THEME: (query: string) => ROUTE_PATHS.THEME.replace(':themekey', query),
};
