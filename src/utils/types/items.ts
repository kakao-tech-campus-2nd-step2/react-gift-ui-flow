import itemImg from '@/assets/images/themeItem.jpeg';

type Item = {
  title: string;
  image: string;
};

const items: Item[] = [
  { title: '생일', image: itemImg },
  { title: '졸업선물', image: itemImg },
  { title: '스몰럭셔리', image: itemImg },
  { title: '명품선물', image: itemImg },
  { title: '결혼/집들이', image: itemImg },
  { title: '따뜻한선물', image: itemImg },
  { title: '가벼운선물', image: itemImg },
  { title: '팬심저격', image: itemImg },
  { title: '교환권', image: itemImg },
  { title: '건강/비타민', image: itemImg },
  { title: '과일/한우', image: itemImg },
  { title: '출산/키즈', image: itemImg },
];

export default items;
