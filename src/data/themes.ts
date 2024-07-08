interface Theme {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

export const themes: { [key: string]: Theme } = {
  birthday: {
    label: '생일',
    title: '특별한 생일 선물',
    description: '소중한 사람에게 특별한 생일 선물을 전달하세요.',
    backgroundColor: '#ffcccc',
  },
  graduation: {
    label: '졸업',
    title: '졸업을 축하하는 선물',
    description: '졸업을 축하하는 마음을 담아 선물을 준비하세요.',
    backgroundColor: '#ccffcc',
  },
  'small-luxury': {
    label: '스몰럭셔리',
    title: '작지만 특별한 선물',
    description: '작지만 마음을 담은 특별한 선물을 전하세요.',
    backgroundColor: '#ffccff',
  },
  luxury: {
    label: '명품',
    title: '고급스러운 명품 선물',
    description: '고급스럽고 특별한 명품 선물을 준비하세요.',
    backgroundColor: '#ccccff',
  },
  'wedding-housewarming': {
    label: '결혼/집들이',
    title: '결혼과 집들이 선물',
    description: '새로운 시작을 축하하는 마음을 담아 선물을 전하세요.',
    backgroundColor: '#ffcc99',
  },
  'warm-gifts': {
    label: '따뜻한 선물',
    title: '따뜻함을 전하는 선물',
    description: '따뜻한 마음을 담아 특별한 선물을 준비하세요.',
    backgroundColor: '#ffffcc',
  },
  'light-gifts': {
    label: '가벼운 선물',
    title: '가볍게 전하는 선물',
    description: '가볍지만 마음을 담은 선물을 전하세요.',
    backgroundColor: '#ccffff',
  },
  'fan-gifts': {
    label: '팬심저격',
    title: '팬을 위한 특별한 선물',
    description: '팬심을 저격하는 특별한 선물을 준비하세요.',
    backgroundColor: '#ff99cc',
  },
  'gift-certificates': {
    label: '교환권',
    title: '다양한 선택의 교환권',
    description: '다양한 선택을 할 수 있는 교환권을 선물하세요.',
    backgroundColor: '#99ccff',
  },
  'health-vitamins': {
    label: '건강/비타민',
    title: '건강을 위한 선물',
    description: '건강을 생각하는 비타민과 영양제를 선물하세요.',
    backgroundColor: '#ccff99',
  },
  'fruits-beef': {
    label: '과일/한우',
    title: '신선한 과일과 한우',
    description: '신선한 과일과 한우를 특별한 사람에게 선물하세요.',
    backgroundColor: '#ff9966',
  },
  'birth-kids': {
    label: '출산/키즈',
    title: '출산과 아이를 위한 선물',
    description: '출산과 아이를 위한 특별한 선물을 준비하세요.',
    backgroundColor: '#ffcc66',
  },
};
