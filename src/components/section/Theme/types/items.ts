import itemImg from '@/assets/images/themeItem.jpeg';

type Item = {
  category: string;
  image: string;
  themeKey: string;
};

const items: Item[] = [
  { category: '생일', image: itemImg, themeKey: 'birthday_gift' },
  { category: '졸업선물', image: itemImg, themeKey: 'graduation_gift' },
  { category: '스몰럭셔리', image: itemImg, themeKey: 'small_luxury_gift' },
  { category: '명품선물', image: itemImg, themeKey: 'luxury_gift' },
  { category: '결혼/집들이', image: itemImg, themeKey: 'event_gift' },
  { category: '시원한선물', image: itemImg, themeKey: 'cool_gift' },
  { category: '가벼운선물', image: itemImg, themeKey: 'life_small_gift' },
  { category: '팬심저격', image: itemImg, themeKey: 'fan_gift' },
  { category: '교환권', image: itemImg, themeKey: 'exchange_gift' },
  { category: '건강/비타민', image: itemImg, themeKey: 'health_care_gift' },
  { category: '과일/한우', image: itemImg, themeKey: 'fresh_gift' },
  { category: '출산/키즈', image: itemImg, themeKey: 'kids_gift' },
];

export default items;
