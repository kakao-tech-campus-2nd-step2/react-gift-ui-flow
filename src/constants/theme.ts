import type { ThemeType } from '@/types/theme.type';

const THEMES: ThemeType[] = [
  {
    id: 'theme:birth',
    key: 'birth',
    name: '생일',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '생일테마',
      title: '감동을 높여줄 생일 선물 리스트',
      description: ['예산에 쏙쏙 맞춰 AI가 자동으로 추천드려요!'],
      backgroundColor: '#5849A3',
    },
  },
  {
    id: 'theme:small-luxury',
    key: 'small-luxury',
    name: '스몰럭셔리',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header:
      'http://img1.kakaocdn.net/thumb/R1280x0@2x.fwebp.q82/?fname=http%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fpagebuilder%2Fimage%2Fpage%2F137%2F20200225_JVXRU.png',
  },
  {
    id: 'theme:luxury',
    key: 'luxury',
    name: '명품선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '명품선물',
      title: '품격있는 명품 선물 제안',
      description: ['소중한 이에게 명품의 품격을 선물하세요'],
      backgroundColor: '#515C7A',
    },
  },
  {
    id: 'theme:small-gift',
    key: 'small-gift',
    name: '가벼운선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '가벼운선물',
      title: '예산은 가볍게, 감동은 무겁게❤️',
      description: ['당신의 센스를 뽐내줄 부담 없는 선물'],
      backgroundColor: '#4A4D50',
    },
  },
  {
    id: 'theme:cool-gift',
    key: 'cool-gift',
    name: '시원한선물',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '시원한선물',
      title: '어느새 찾아온 무더운 여름',
      description: ['기분 좋아지는 시원한 선물☀️'],
      backgroundColor: '#6C95D1',
    },
  },
  {
    id: 'theme:home',
    key: 'home',
    name: '결혼/이사/집들이',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '결혼/이사/집들이',
      title: '들려오는 지인들의 좋은 소식 💌',
      description: ['취향저격 감성파 vs 활용만점 실용파'],
      backgroundColor: '#94785D',
    },
  },
  {
    id: 'theme:exam',
    key: 'exam',
    name: '응원/시험',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '언제나 응원해',
      title: '잘했고, 잘라고 있고, 잘할 거야',
      description: ['반짝반짝 눈부신 노력에 박수👏', '다 잘될 거에요, 화이팅!'],
      backgroundColor: '#465E4C',
    },
  },
  {
    id: 'theme:fansim',
    key: 'fansim',
    name: '팬심저격',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header:
      'https://img1.kakaocdn.net/thumb/R1280x0@2x.fwebp.q82/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fpagebuilder%2Fimage%2Fpage%2F19916%2F20230831_CXHEP.png',
  },
  {
    id: 'theme:coupon',
    key: 'coupon',
    name: '교환권',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header:
      'https://img1.kakaocdn.net/thumb/R1280x0@2x.fwebp.q82/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fpagebuilder%2Fimage%2Fpage%2F24839%2F20240621_QVCYK.jpg',
  },
  {
    id: 'theme:health&vitamin',
    key: 'health&vitamin',
    name: '건강/비타민',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '건강 & 비타민',
      title: '건강을 기원하는 마음을 담아 선물하세요❤️',
      description: ['홍삼 / 녹용 / 비타민 / 콜라겐 / 오메가3 / 건강즙 등'],
      backgroundColor: '#FC8197',
    },
  },
  {
    id: 'theme:fruits&meat',
    key: 'fruits&meat',
    name: '과일/한우',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '인기 신선식품',
      title: '정성 가득한 과일/한우 선물로 감사한 마음을 전해보세요❤️',
      description: ['과일, 함우, 수입소고기, 돼지고기, 전복, 견과 등'],
      backgroundColor: '#ED6C59',
    },
  },
  {
    id: 'theme:kids',
    key: 'kids',
    name: '출산/키즈',
    image:
      'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    header: {
      label: '출산/키즈',
      title: '벅찬 감동의 마을을 전할',
      description: ['엄마와 아이를 위한 세심한 선물👼'],
      backgroundColor: '#FC8197',
    },
  },
];

export default THEMES;
