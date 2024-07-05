export interface Theme {
    label: string;
    title: string;
    description: string;
    backgroundColor: string;
    imageSrc: string;
  }
  
  export interface Themes {
    [key: string]: Theme;
  }
  