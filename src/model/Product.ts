export interface Product {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

export interface RankingItem extends Product {
  rankingIndex: number;
}

export interface RealTimeRankingFilter {
  who: "전체" | "여성이" | "남성이" | "청소년이";
  purpose: "받고싶어한" | "많이 선물한" | "위시로 받은";
}
