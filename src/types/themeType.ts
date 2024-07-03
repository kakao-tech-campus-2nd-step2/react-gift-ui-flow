export type ThemeTitleType = {
  id: number;
  imageSrc: string;
  themeTitle: string;
};

export type ThemeHeaderType = {
  id: number;
  themeTitle: string;
  subTitle: string;
  description: string;
  color: string;
};

export interface ThemeListType {
  subtitle: string;
  title: string;
  amount: string;
}

export interface ThemeListDataType {
  [key: string]: ThemeListType[];
}
