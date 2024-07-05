export type ThemeHeaderType =
  | {
      label: string;
      title: string;
      description: string[];
      backgroundColor: string;
    }
  | string;

export type ThemeType = {
  id: string;
  key: string;
  name: string;
  image: string;
  header: ThemeHeaderType;
};
