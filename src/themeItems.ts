export type GoodsItem = {
  key: string;
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
};

const items: GoodsItem[] = [
  { key: 'item1', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item2', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item3', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item4', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item5', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item6', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item7', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item8', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item9', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item10', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item11', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item12', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item13', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item14', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item15', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item16', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item17', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item18', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item19', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item20', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
  { key: 'item21', imageSrc: 'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg', subtitle: 'BBQ', title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L', amount: 29000 },
];

export default items;
