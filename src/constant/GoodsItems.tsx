export interface Goods {
  key: number;
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex?: number;
  filterTarget?: string;
  filterType?: string;
}

export const goodsItems: Goods[] = [
  {
    key: 1,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240702094255_ed5f8d1c50e3432493b0c6bd0133e66b.png',
    subtitle: '라피네르(디퓨저)',
    title: '"장마 필수템" 라피네르 크라프트 퍼퓸 샤쉐 3P 옷장 제습/습기 제거',
    amount: 19800,
    rankingIndex: 1,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
  {
    key: 2,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240619203610_ac4b56f9d0c941d1940f098aa8c3f174.jpg',
    subtitle: '프로젝트슬립',
    title: '[여름향기선물] 라포즈 숙면 필로우미스트&섬유향수 청량 숲속 우디 (+메시지카드&포장백)',
    amount: 19900,
    rankingIndex: 2,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
  {
    key: 3,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20230125110724_df6e71a1710e4c3d845f6b47a038028d.jpg',
    subtitle: '허브타임',
    title: '"생일/집들이 선물" 플렌느 마블 니치향수 디퓨저 200ml 3개입',
    amount: 20900,
    rankingIndex: 3,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
  {
    key: 4,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240321134031_b78316ae497943c9929d6ac166ea1470.jpg',
    subtitle: 'GNC',
    title:
      '"미국에서온명품영양제" GNC 밀크씨슬, 멀티비타민 앤 미네랄, 루테인, 칼슘 앤 마그네슘 비타민D 3종 택1 + 레드패키지',
    amount: 17900,
    rankingIndex: 4,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
  {
    key: 5,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240417130657_e165dc31587c404e9c5d1fbd2a2685c5.jpg',
    subtitle: '오브젝트랩',
    title: '"새차/집들이✨" 퍼퓸사쉐 차량용 방향제 옷장 실내 디퓨저 샤쉐 20g+리필오일10ml',
    amount: 14800,
    rankingIndex: 5,
    filterTarget: '남성이',
    filterType: '받고 싶어한',
  },
  {
    key: 6,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240430151345_802828ce80ae487c9bcf9d1d3d9c5116.jpg',
    subtitle: '스타벅스',
    title: '"부드러운 디저트" 아이스 카페 아메리카노 T 2잔 + 부드러운 생크림 카스텔라',
    amount: 13500,
    rankingIndex: 6,
    filterTarget: '청소년이',
    filterType: '받고 싶어한',
  },
  {
    key: 7,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240625143521_2d38d248d85143b1bb84d28756cdb699.png',
    subtitle: '프로젝트슬립',
    title: '[여름 선물] 쿨링 기능성 메모리폼 쿨잠베개 경추베개 냉감 바디필로우',
    amount: 29900,
    rankingIndex: 7,
    filterTarget: '남성이',
    filterType: '많이 선물한',
  },
  {
    key: 8,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240612140520_fba479000ad2406eafca6f41fd78d9c4.jpg',
    subtitle: '인문',
    title: '[교보문고] 만일 나에게 단 한 번의 아침이 남아 있다면',
    amount: 17820,
    rankingIndex: 8,
    filterTarget: '남성이',
    filterType: '위시로 받은',
  },
  {
    key: 9,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20231013100350_3e79f5993a38452ab7d4f31712d305f3.jpg',
    subtitle: 'BBQ',
    title: '[EVENT] 황올반+BBQ양념반+콜라1.25L',
    amount: 22500,
    rankingIndex: 9,
    filterTarget: '청소년이',
    filterType: '많이 선물한',
  },
  {
    key: 10,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240409093958_a467c6a4e16a4e2c8a77c3a41b79452b.JPG',
    subtitle: '에치와이',
    title: '"생일/선물 추천" 코코브루니 봉봉 초콜릿',
    amount: 10900,
    rankingIndex: 10,
    filterTarget: '청소년이',
    filterType: '위시로 받은',
  },
  {
    key: 11,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240430151050_779748e0e62a4be091e72d2ba50720c1.jpg',
    subtitle: '스타벅스',
    title: '"오늘도 달콤하게" 아이스 카페 아메리카노 T + 7레이어',
    amount: 10200,
    rankingIndex: 11,
    filterTarget: '여성이',
    filterType: '많이 선물한',
  },
  {
    key: 12,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240619093712_9bc3203a1502428689b78e93bd61e238.jpg',
    subtitle: '미학',
    title: '"더현대서울 PICK" [샘플3종 증정/선물포장] 핸드크림 5종',
    amount: 20000,
    rankingIndex: 12,
    filterTarget: '여성이',
    filterType: '위시로 받은',
  },
  {
    key: 13,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240619093712_9bc3203a1502428689b78e93bd61e238.jpg',
    subtitle: '미학',
    title: '"더현대서울 PICK" [샘플3종 증정/선물포장] 핸드크림 5종',
    amount: 20000,
    rankingIndex: 13,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
  {
    key: 14,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240619093712_9bc3203a1502428689b78e93bd61e238.jpg',
    subtitle: '미학',
    title: '"더현대서울 PICK" [샘플3종 증정/선물포장] 핸드크림 5종',
    amount: 20000,
    rankingIndex: 14,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
  {
    key: 15,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240619093712_9bc3203a1502428689b78e93bd61e238.jpg',
    subtitle: '미학',
    title: '"더현대서울 PICK" [샘플3종 증정/선물포장] 핸드크림 5종',
    amount: 20000,
    rankingIndex: 15,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
  {
    key: 16,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240619093712_9bc3203a1502428689b78e93bd61e238.jpg',
    subtitle: '미학',
    title: '"더현대서울 PICK" [샘플3종 증정/선물포장] 핸드크림 5종',
    amount: 20000,
    rankingIndex: 16,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
  {
    key: 17,
    imageSrc:
      'https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240619093712_9bc3203a1502428689b78e93bd61e238.jpg',
    subtitle: '미학',
    title: '"더현대서울 PICK" [샘플3종 증정/선물포장] 핸드크림 5종',
    amount: 20000,
    rankingIndex: 17,
    filterTarget: '여성이',
    filterType: '받고 싶어한',
  },
];
