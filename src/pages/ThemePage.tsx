import styled from '@emotion/styled';
import React from 'react';
import { useParams } from 'react-router-dom';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Container } from '@/components/common/layouts/Container/index';
import { Grid } from '@/components/common/layouts/Grid/index';

interface Theme {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const themes: Record<string, Theme> = {
  birthday: {
    label: '생일테마',
    title: '감동을 높여줄 생일 선물 리스트',
    description: '예산에 쏙쏙 맞춰 AI가 자동으로 추천드려요!',
    backgroundColor: '#5949a3',
  },
  'small-luxury': {
    label: '스몰럭셔리',
    title: '당신을 위한 작은 사치,',
    description: '스몰 럭셔리 아이템',
    backgroundColor: '#945c44',
  },
  brand: {
    label: '명품선물',
    title: '품격있는 명품 선물 제안',
    description: '소중한 이에게 명품의 품격을 선물하세요',
    backgroundColor: '#515c7a',
  },
  'light-gift': {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4b4d50',
  },
  'cool-gift': {
    label: '시원한 선물',
    title: '어느새 찾아온 무더운 여름',
    description: '기분 좋아지는 시원한 선물☀️',
    backgroundColor: '#6c95d1',
  },
  wedding: {
    label: '결혼/이사/집들이',
    title: '들려오는 지인들의 좋은 소식 💌',
    description: '취향저격 감성파 vs 활용만점 실용파',
    backgroundColor: '#95785d',
  },
  cheerup: {
    label: '언제나 응원해',
    title: '잘했고, 잘하고 있고, 잘할 거야',
    description: '반짝반짝 눈부신 노력에 박수👏\n다 잘될 거예요, 화이팅!',
    backgroundColor: '#465f4d',
  },
  'fan-gift': {
    label: '팬심저격',
    title: '최애에 진심인 당신을 위한',
    description: '팬심저격 굿즈 모음',
    backgroundColor: '#222222',
  },
  ecoupon: {
    label: '놓치면 후회할',
    title: '교환권 특가',
    description: '매주 바뀌는 혜택을 놓치지 마세요!',
    backgroundColor: '#6c95d1',
  },
  health: {
    label: '건강 & 비타민',
    title: '건강을 기원하는 마음 담아 선물하세요❤️',
    description: '홍삼 / 녹용 / 비타민 / 콜라겐 / 오메가3 / 건강즙 등',
    backgroundColor: '#fc8197',
  },
  'fruit-beef': {
    label: '인기 신선식품',
    title: '정성 가득한 과일/한우 선물로\n감사한 마음을 전해보세요❤️',
    description: '과일, 한우, 수입소고기, 돼지고기, 전복, 견과 등',
    backgroundColor: '#ed6d59',
  },
  pregnancy: {
    label: '출산/키즈',
    title: '벅찬 감동의 마음을 전할',
    description: '엄마와 아이를 위한 세심한 선물👼🏻',
    backgroundColor: '#fc8197',
  },
};

interface Item {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
}

const ItemsData: Item[] = [];
for (let i = 1; i <= 21; i++) {
  ItemsData.push({
    imageSrc:
      'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg',
    subtitle: 'BBQ',
    title: 'BBQ 양념치킨+크림치즈볼+콜라1.25L',
    amount: 29000,
  });
}

export const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  if (!themeKey || !themes[themeKey]) {
    return <div>유효하지 않은 테마입니다.</div>;
  }

  const theme = themes[themeKey];

  return (
    <>
      <HeaderSection style={{ backgroundColor: theme.backgroundColor }}>
        <HeaderContainer>
          <HeaderLabel>{theme.label}</HeaderLabel>
          <HeaderTitle>{theme.title}</HeaderTitle>
          <HeaderDescription>{theme.description}</HeaderDescription>
        </HeaderContainer>
      </HeaderSection>
      <ThemeSection>
        <Grid columns={{ sm: 2, lg: 4 }} gap={20}>
          {ItemsData.map((item, index) => (
            <DefaultGoodsItems key={index} {...item} />
          ))}
        </Grid>
      </ThemeSection>
    </>
  );
};

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  color: #fff;
`;

const HeaderContainer = styled(Container)`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

const HeaderLabel = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin: 10px 0 0 0;
`;

const HeaderDescription = styled.p`
  font-size: 24px;
  color: rgba(255, 255, 255, 0.55);
  margin: 10px 0 0 0;
  white-space: pre-line;
`;

const ThemeSection = styled.section`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 40px;
`;
