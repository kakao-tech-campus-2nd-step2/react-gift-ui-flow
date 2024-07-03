import React from 'react';
import { Link } from 'react-router-dom';
import Image from '@components/Image/Image';
import Container from '@components/Layout/Container';
import Grid from '@components/Layout/Grid';
import { ThemeContainer, CategoryText } from './ThemeSection.styles';

const themes = [
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png',
    category: '생일',
    key: 'theme_birth',
    label: '생일',
    title: '생일 선물',
    description: '소중한 사람을 위한 생일 선물을 찾아보세요.',
    backgroundColor: 'rgb(89, 73, 163)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292320240418_YIDPC.png',
    category: '스몰럭셔리',
    key: 'theme_small_luxury',
    label: '스몰럭셔리',
    title: '스몰럭셔리 선물',
    description: '작지만 특별한 선물들을 모아봤어요.',
    backgroundColor: 'rgb(118, 82, 65)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20210324102157_6d63fe7cc1af4d00bc904537134a60d7',
    category: '명품선물',
    key: 'theme_luxury_gift',
    label: '명품선물',
    title: '품격있는 명품 선물 제안',
    description: '소중한 이에게 명품의 품격을 선물하세요.',
    backgroundColor: 'rgb(81, 92, 122)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292120240418_VVXBZ.png',
    category: '가벼운선물',
    key: 'theme_small_gift',
    label: '가벼운선물',
    title: '예산은 가볍게, 감동은 무겁게',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: 'rgb(75, 77, 80)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F313720240325_QDECC.png',
    category: '시원한선물',
    key: 'theme_tea',
    label: '시원한선물',
    title: '시원한선물!',
    description: '어느새 찾아온 무더운 여름, 기분 좋아지는 시원한 선물',
    backgroundColor: 'rgb(108, 149, 209)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F314220240418_PZTWI.png',
    category: '결혼/집들이',
    key: 'theme_wedding',
    label: '결혼/이사/집들이',
    title: '들려오는 지인들의 좋은 소식',
    description: '취향저격 감성파 vs 활용만점 실용파',
    backgroundColor: 'rgb(149, 120, 93)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200403204524_017c7a9eb93044e9bd42c3b28b395c95',
    category: '응원/시험',
    key: 'theme_cheerup',
    label: '언제나 응원해',
    title: '잘했고, 잘하고 있고, 잘할 거야',
    description: '반짝반짝 눈부신 노력에 박수! 다 잘될 거예요, 화이팅!',
    backgroundColor: 'rgb(70, 95, 77)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F310220240702_INUMH.jpg',
    category: '팬심저격',
    key: 'theme_fan_gift',
    label: '팬심저격',
    title: '최애에 진심인 당신을 위한',
    description: '팬심저격 굿즈 모음',
    backgroundColor: 'rgb(183, 183, 183)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F293020240701_YFTMN.jpg',
    category: '교환권',
    key: 'theme_ecoupon',
    label: '교환권',
    title: '교환권 특가',
    description: '매주 바뀌는 혜택을 놓치지 마세요!',
    backgroundColor: 'rgb(178, 223, 255)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F334020240314_PHDHV.png',
    category: '건강/비타민',
    key: 'theme_health',
    label: '건강 & 비타민',
    title: '건강을 기원하는 마음 담아 선물하세요',
    description: '홍삼 / 녹용 / 비타민 / 콜라겐 / 오메가3 / 건강즙 등',
    backgroundColor: 'rgb(252, 129, 151)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2Fundefined20240315_JEGEL.png',
    category: '과일/한우',
    key: 'theme_fruit_meat',
    label: '인기 신선식품',
    title: '정성 가득한 과일/한우 선물로 감사한 마음을 전해보세요',
    description: '과일, 한우, 수입소고기, 돼지고기, 전복, 견과 등',
    backgroundColor: 'rgb(237, 109, 89)',
  },
  {
    src: 'https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20200403211415_cdf1337c6fd54b5aaffce46f1fcff86b',
    category: '출산/키즈',
    key: 'theme_pregnancy',
    label: '출산/키즈',
    title: '벅찬 감동의 마음을 전할',
    description: '엄마와 아이를 위한 세심한 선물',
    backgroundColor: 'rgb(252, 129, 151)',
  },
];

const ThemeSection = () => (
  <ThemeContainer>
    <Container
      width="100%"
      maxWidth="1024px"
      justifyContent="center"
      alignItems="center"
    >
      <Grid columns={6}>
        {themes.map((theme) => (
          <Link
            key={theme.key}
            to={`/theme/${theme.key}`}
            state={{
              label: theme.label,
              title: theme.title,
              description: theme.description,
              backgroundColor: theme.backgroundColor,
            }}
          >
            <Container
              width="100%"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              padding="25px 35px 24px"
            >
              <Image src={theme.src} width={90} radius={32} />
              <CategoryText>{theme.category}</CategoryText>
            </Container>
          </Link>
        ))}
      </Grid>
    </Container>
  </ThemeContainer>
);

export default ThemeSection;
