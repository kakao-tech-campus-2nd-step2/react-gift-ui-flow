import { GiftFilterType, UserFilterContentType } from '@/types/rankTypes';

export const UserFilterButtons: UserFilterContentType[] = [
  { value: '전체', emoji: 'ALL' },
  { value: '여성이', emoji: '👩🏻' },
  { value: '남성이', emoji: '👱🏻‍♂️' },
  { value: '청소년이', emoji: '👦🏻' },
];

export const GiftFilterButons: GiftFilterType[] = [
  '받고 싶어한',
  '많이 선물한',
  '위시로 받은',
];
