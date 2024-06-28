interface Theme {
  rootBg: string;
  containerBg: string;
  primary: string;
  primaryDark: string;
  text: string;
  textInset: string;
  error: string;
}

type ThemeProvider = {
  THEME_DARK: Theme;
  THEME_LIGHT: Theme;
};

const Themes: ThemeProvider = {
  THEME_LIGHT: {
    rootBg: '#E5E5EA',
    containerBg: '#F4F5F9',
    primary: '#3C7FFF',
    primaryDark: '#0451f8',
    text: '#1C1C1E',
    textInset: '#E4E4E4',
    error: '#FF555F',
  },
  THEME_DARK: {
    rootBg: '#333333',
    containerBg: '#1C1C1E',
    primary: '#3C7FFF',
    primaryDark: '#0451f8',
    text: '#F4F5F9',
    textInset: '#191919',
    error: '#FF555F',
  },
};

export { Themes };
export type { Theme };
