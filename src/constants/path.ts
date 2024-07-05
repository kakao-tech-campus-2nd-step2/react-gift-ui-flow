import { Category } from "./category";

const ROUTE_PATH = {
  ROOT: "/",
  MY_ACCOUNT: "/my-account",
  LOGIN: "/login",
  THEME_ROUTE: "/theme/:themeKey",
  THEME_DETAIL: (themeKey: Category["themeKey"]) => `/theme/${themeKey}`,
};

Object.freeze(ROUTE_PATH);

export default ROUTE_PATH;
