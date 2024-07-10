import IMAGE from "./Image";

export interface Category {
  themeKey:
    | "birthday"
    | "graduation"
    | "small-luxury"
    | "luxury"
    | "wedding"
    | "touching"
    | "light"
    | "fan"
    | "coupon"
    | "health"
    | "fruit-beef"
    | "kids";
  name: string;
  imageSrc: string;
}

const CATEGORY: Category[] = [
  {
    themeKey: "birthday",
    name: "생일",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "graduation",
    name: "졸업선물",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "small-luxury",
    name: "스몰럭셔리",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "luxury",
    name: "명품선물",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "wedding",
    name: "결혼/집들이",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "touching",
    name: "따뜻한선물",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "light",
    name: "가벼운선물",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "fan",
    name: "팬심저격",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "coupon",
    name: "교환권",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "health",
    name: "건강/비타민",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "fruit-beef",
    name: "과일/한우",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
  {
    themeKey: "kids",
    name: "출산/키즈",
    imageSrc: IMAGE.DEFAULT_CATEGORY,
  },
];

export default CATEGORY;
