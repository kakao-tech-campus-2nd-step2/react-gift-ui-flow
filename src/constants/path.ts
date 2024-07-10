import { Category } from "./category";

const ROUTE_PATH = {
  ROOT: "/",
  MY_ACCOUNT: "/my-account",
  LOGIN: "/login",
  THEME_ROUTE: "/theme/:themeKey",
  THEME_DETAIL: (themeKey: Category["themeKey"]) => `/theme/${themeKey}`,
} as const;

export default ROUTE_PATH;
