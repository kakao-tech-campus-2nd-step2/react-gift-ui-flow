type Data= {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
};

const item: Data = {
  imageSrc: "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
  subtitle: "BBQ",
  title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
  amount: 29000
};

export const itemList:Data[] = Array.from({ length: 21 }, () => item);