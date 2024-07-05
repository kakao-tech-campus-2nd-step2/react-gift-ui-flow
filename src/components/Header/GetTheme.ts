export interface Theme {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
  imageSrc: string;
}

export const themes: { [key: string]: Theme } = {
  theme1: {
    label: '생일테마',
    title: '특별한 생일 선물 리스트',
    description: 'AI가 추천하는 예산 맞춤 생일 선물!',
    backgroundColor: '#7B68EE',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme2: {
    label: '스몰럭셔리',
    title: '작지만 특별한 사치',
    description: '나를 위한 작은 사치품을 만나보세요.',
    backgroundColor: '#D2B48C',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme3: {
    label: '명품선물',
    title: '고품격 명품 선물',
    description: '소중한 분께 드리는 명품의 품격.',
    backgroundColor: '#708090',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme4: {
    label: '가벼운선물',
    title: '가볍지만 감동적인 선물',
    description: '부담 없이 주고받는 센스 있는 선물.',
    backgroundColor: '#4682B4',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme5: {
    label: '시원한선물',
    title: '여름을 위한 시원한 선물',
    description: '더위를 날려줄 시원한 아이템.',
    backgroundColor: '#20B2AA',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme6: {
    label: '결혼/집들이',
    title: '새로운 출발을 위한 선물',
    description: '결혼과 집들이를 축하하는 특별한 선물.',
    backgroundColor: '#FF69B4',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme7: {
    label: '응원/시험',
    title: '응원의 마음을 담은 선물',
    description: '시험을 앞둔 이에게 힘이 되는 선물.',
    backgroundColor: '#8A2BE2',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme8: {
    label: '팬심저격',
    title: '팬심을 저격하는 선물',
    description: '팬을 위한 특별하고 유니크한 선물.',
    backgroundColor: '#FF4500',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme9: {
    label: '교환권',
    title: '다양한 선택의 교환권',
    description: '자유롭게 선택할 수 있는 교환권 선물.',
    backgroundColor: '#32CD32',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme10: {
    label: '건강/비타민',
    title: '건강을 위한 선물',
    description: '소중한 건강을 위한 비타민과 영양제.',
    backgroundColor: '#FFD700',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme11: {
    label: '과일/한우',
    title: '신선한 과일과 한우 선물',
    description: '건강을 생각한 과일과 한우.',
    backgroundColor: '#8B4513',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
  theme12: {
    label: '출산/키즈',
    title: '출산과 키즈를 위한 선물',
    description: '출산을 축하하고 아이를 위한 선물.',
    backgroundColor: '#FF6347',
    imageSrc: `https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png`,
  },
};
