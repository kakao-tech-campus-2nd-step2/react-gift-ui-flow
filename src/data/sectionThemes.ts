import { colors } from '@/styles/variants';

export type Theme = {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
};

export const themes: { [key: string]: Theme } = {
  birthday_gift: {
    label: '생일테마',
    title: '감동을 높여줄 생일 선물 리스트',
    description: '당신의 센스를 뽐내줄 생일 선물🥳',
    backgroundColor: colors.darkGray,
  },
  graduation_gift: {
    label: '졸업테마',
    title: '감동을 높여줄 졸업 선물 리스트',
    description: '당신의 센스를 뽐내줄 졸업 선물🎓',
    backgroundColor: colors.red,
  },
  small_luxury_gift: {
    label: '스몰럭셔리',
    title: '당신을 위한 작은 사치,',
    description: '스몰 럭셔리 아이템✨',
    backgroundColor: colors.pink,
  },
  luxury_gift: {
    label: '명품선물',
    title: '품격있는 명품 선물 제안',
    description: '소중한 이에게 명품의 품격을 선물하세요',
    backgroundColor: colors.mocha,
  },
  event_gift: {
    label: '결혼/이사/집들이',
    title: '들려오는 지인들의 좋은 소식',
    description: '취향저격 감성파 vs 활용만점 실용파',
    backgroundColor: colors.yellow,
  },
  cool_gift: {
    label: '시원한선물',
    title: '어느새 찾아온 무더운 여름⛱️',
    description: '기분 좋아지는 시원한 선물',
    backgroundColor: colors.blue,
  },
  life_small_gift: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: colors.darkGray,
  },
  fan_gift: {
    label: '팬심저격',
    title: '최애에 진심인 당신을 위한',
    description: '팬심저격 굿즈 모음',
    backgroundColor: colors.green,
  },
  exchange_gift: {
    label: '교환권',
    title: '선물 사용은 간편하게',
    description: '당신의 센스를 뽐내줄 교환권 선물',
    backgroundColor: colors.coralBlue,
  },
  health_care_gift: {
    label: '건강 & 비타민',
    title: '건강을 기원하는 마음 담아 선물하세요',
    description: '홍삼 / 비타민 / 콜라겐 / 오메가3 / 건강즙 등',
    backgroundColor: colors.oddBlue,
  },
  fresh_gift: {
    label: '인기 신선식품',
    title: '정성 가득한 과일/한우 선물로 감사한 마음을 전해보세요',
    description: '과일, 한우, 돼지고기, 수입소고기, 전복 등',
    backgroundColor: colors.orange,
  },
  kids_gift: {
    label: '출산/키즈',
    title: '벅찬 감동의 마음을 전할',
    description: '엄마와 아이를 위한 세심한 선물👶',
    backgroundColor: colors.babyPink,
  },
};
