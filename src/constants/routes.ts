export const ROUTES = {
  LOGIN: '/login',
  MAIN: '/',
  THEME: '/theme/:themeKey',
  MY_ACCOUNT: '/my-account',
};

export const getThemeRoute = (themeKey: string): string => `/theme/${themeKey}`;

export const TEXTS = {
  LOGO_ALT_TEXT: '선물하기 로고 이미지',
  MENU_LOGIN: '로그인',
  MENU_MY_ACCOUNT: '내 계정',
};
