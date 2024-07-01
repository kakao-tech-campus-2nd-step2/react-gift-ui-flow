export type Theme = 'kakao' | 'outline' | 'black' | 'lightGray' | 'darkGray';
export type Size = 'small' | 'large' | 'response';
export type FlexDirection = 'row' | 'column';
export type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';
export type AlignItems =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'baseline'
  | 'stretch';
export type Column =
  | number
  | {
      initial: number;
      lg: number;
      md: number;
      sm: number;
    };
