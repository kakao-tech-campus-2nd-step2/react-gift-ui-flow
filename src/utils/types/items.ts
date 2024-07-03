import itemImg from '@/assets/images/themeItem.jpeg';

type Item = {
  category: string;
  image: string;
};

const items: Item[] = [
  { category: '생일', image: itemImg },
  { category: '졸업선물', image: itemImg },
  { category: '스몰럭셔리', image: itemImg },
  { category: '명품선물', image: itemImg },
  { category: '결혼/집들이', image: itemImg },
  { category: '따뜻한선물', image: itemImg },
  { category: '가벼운선물', image: itemImg },
  { category: '팬심저격', image: itemImg },
  { category: '교환권', image: itemImg },
  { category: '건강/비타민', image: itemImg },
  { category: '과일/한우', image: itemImg },
  { category: '출산/키즈', image: itemImg },
];

export default items;
