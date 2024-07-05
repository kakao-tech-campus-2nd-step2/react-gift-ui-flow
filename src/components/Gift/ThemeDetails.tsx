export interface Theme {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

interface ThemeOptions {
  [key: string]: Theme;
}

const ThemeDetails: ThemeOptions = {
  birthday: {
    label: '생일 선물',
    title: '특별한 날, 특별한 선물 🎉',
    description: '생일을 더욱 특별하게 만들어 줄 선물',
    backgroundColor: '#FFD700',
  },
  graduation: {
    label: '졸업 선물',
    title: '새로운 시작을 응원해요 🎓',
    description: '졸업을 축하하는 마음을 담아',
    backgroundColor: '#8A2BE2',
  },
  'small-luxury': {
    label: '스몰 럭셔리',
    title: '작은 사치, 큰 행복 ✨',
    description: '일상에 작은 사치를 더하세요',
    backgroundColor: '#FF4500',
  },
  luxury: {
    label: '명품 선물',
    title: '가장 특별한 순간을 위해 💎',
    description: '품격 있는 선물로 마음을 전하세요',
    backgroundColor: '#DAA520',
  },
  marry: {
    label: '결혼/집들이',
    title: '새로운 시작을 축하해요 🎊',
    description: '행복한 새 출발을 위한 선물',
    backgroundColor: '#00BFFF',
  },
  heart: {
    label: '따뜻한 선물',
    title: '마음까지 따뜻해지는 선물 ❤️',
    description: '따뜻한 마음을 전하세요',
    backgroundColor: '#FF69B4',
  },
  light: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게 ❤️',
    description: '당신의 센스를 뽐내줄 부담없는 선물',
    backgroundColor: '#32CD32',
  },
  fan: {
    label: '팬심 저격',
    title: '팬심을 저격하는 선물 🎁',
    description: '팬을 위한 특별한 선물',
    backgroundColor: '#FF6347',
  },
  gifticon: {
    label: '교환권',
    title: '실용적인 선물, 교환권 🎟️',
    description: '마음대로 골라 쓰는 즐거움',
    backgroundColor: '#FF4500',
  },
  health: {
    label: '건강/비타민',
    title: '건강을 위한 선물 💪',
    description: '건강을 챙기는 마음을 전하세요',
    backgroundColor: '#228B22',
  },
  food: {
    label: '과일/한우',
    title: '맛있는 선물, 과일과 한우 🍎🥩',
    description: '정성이 담긴 맛있는 선물',
    backgroundColor: '#FF8C00',
  },
  kids: {
    label: '출산/키즈',
    title: '아이를 위한 특별한 선물 👶',
    description: '아이들의 웃음을 위한 선물',
    backgroundColor: '#00CED1',
  },
};

export default ThemeDetails;
