interface GiftTheme {
  title: string;
  subtitle: string;
}

const giftThemeKeys = ['생일', '졸업선물', '스몰럭셔리', '명품선물', '결혼/집들이', '따뜻한선물',
  '가벼운선물', '팬심저격', '교환권', '건강/비타민', '과일/한우', '출산/키즈'];
type GiftThemeKey = typeof giftThemeKeys[number];

const GiftThemes: { [name: GiftThemeKey]: GiftTheme } = {};

giftThemeKeys.forEach((name) => {
  GiftThemes[name] = {
    title: '예산은 가볍게, 감동은 무겁게❤️',
    subtitle: '당신의 센스를 뽐내줄 부담 없는 선물',
  };
});

export default GiftThemes;
