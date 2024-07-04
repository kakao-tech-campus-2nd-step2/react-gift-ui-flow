import { GiftFilterButtonType, UserFilterButtonType } from '@/types/rankTypes';

export const UserFilterButtons: UserFilterButtonType[] = [
  { index: 0, value: '전체', emoji: 'ALL' },
  { index: 1, value: '여성이', emoji: '👩🏻' },
  { index: 2, value: '남성이', emoji: '👱🏻‍♂️' },
  { index: 3, value: '청소년이', emoji: '👦🏻' },
];

export const GiftFilterButons: GiftFilterButtonType[] = [
  { index: 0, value: '받고 싶어한' },
  { index: 1, value: '많이 선물한' },
  { index: 2, value: '위시로 받은' },
];
