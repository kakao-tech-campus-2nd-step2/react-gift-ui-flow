export const ROUTE_PATHS = {
  ROOT: '/',
  HOME: '/',
  THEME: '/theme/:themeKey',
  MYPAGE: '/my-account',
  LOGIN: '/login',
};

export const getDynamicPath = (path: string, params: { [key: string]: string }): string => {
  return path.replace(/:(\w+)/g, (_, key) => params[key]);
};
