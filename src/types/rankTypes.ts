export interface RankItemType {
  id: number;
  userType: string;
  giftType: string;
  title: string;
  subtitle: string;
  amount: string;
}

export interface FilterRankItemType extends RankItemType {
  rank: number;
}

export type UserFilterType = '전체' | '여성이' | '남성이' | '청소년이';

export type GiftFilterType = '받고 싶어한' | '많이 선물한' | '위시로 받은';

export type UserFilterButtonType = {
  index: number;
  value: UserFilterType;
  emoji: string;
};

export type GiftFilterButtonType = {
  index: number;
  value: GiftFilterType;
};
