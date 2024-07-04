export interface Theme {
  id: number;
  key: string;
  label?: string;
  title: string;
  description?: string;
  backgroundColor: string;
}

export const ThemeData: Theme[] = [
  {
    id: 1,
    key: 'theme_birth',
    label: '생일테마',
    title: '감동을 높여줄 생일 선물 리스트',
    description: '예산에 쏙쏙 맞춰 AI가 자동으로 추천드려요!',
    backgroundColor: '#5949a3',
  },
  {
    id: 2,
    key: 'life_small_luxury',
    label: '스몰럭셔리',
    title: '당신을 위한 작은 사치, 스몰 럭셔리 아이템',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4b4d50',
  },
  {
    id: 3,
    key: 'life_luxury',
    label: '명품선물',
    title: '품격있는 명품 선물 제안',
    description: '소중한 이에게 명품의 품격을 선물하세요',
    backgroundColor: '#515c7a',
  },
  {
    id: 4,
    key: 'life_small_gift',
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4b4d50',
  },
  {
    id: 5,
    key: 'life_tea',
    label: '시원한 선물',
    title: '어느새 찾아온 무더운 여름<br>기분 좋아지는 시원한 선물☀️',
    backgroundColor: '#6c95d1',
  },
  {
    id: 6,
    key: 'life_wedding',
    label: '결혼/이사/집들이',
    title: '들려오는 지인들의 좋은 소식 💌',
    description: '취향저격 감성파 vs 활용만점 실용파',
    backgroundColor: '#95785d',
  },
  {
    id: 7,
    key: 'life_cheerup',
    label: '언제나 응원해',
    title: '잘했고, 잘하고 있고, 잘할 거야',
    description: '반짝반짝 눈부신 노력에 박수👏<br>다 잘될 거예요, 화이팅!',
    backgroundColor: '#465F4d',
  },
  {
    id: 8,
    key: 'life_fan',
    label: '팬심저격',
    title: '최애에 진심인 당신을 위한<br>팬심저격 굿즈 모음',
    backgroundColor: '#1e1e1e',
  },
  {
    id: 9,
    key: 'theme_ecoupon',
    title: '놓치면 후회할 교환권 특가',
    description: '매주 바뀌는 혜택을 놓치지 마세요!',
    backgroundColor: '#4b4d50',
  },
  {
    id: 10,
    key: 'life_health',
    label: '건강 & 비타민',
    title: '건강을 기원하는 마음 담아<br>선물하세요❤️',
    description: '홍삼 / 녹용 / 비타민 / 콜라겐 / 오메가3 / 건강즙 등',
    backgroundColor: '#fc8197',
  },
  {
    id: 11,
    key: 'life_fruit',
    label: '인기 신선식품',
    title: '정성 가득한 과일/한우 선물로<br>감사한 마음을 전해보세요❤️',
    description: '과일, 한우, 수입소고기, 돼지고기, 전복, 견과 등',
    backgroundColor: '#ed6d59',
  },
  {
    id: 12,
    key: 'life_pregnancy',
    label: '출산/키즈',
    title: '벅찬 감동의 마음을 전할',
    description: '엄마와 아이를 위한 세심한 선물👼🏻',
    backgroundColor: '#fc8197',
  },
];
