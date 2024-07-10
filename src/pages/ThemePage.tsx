import React from 'react';
import { useParams } from 'react-router-dom';

import ProductList from '@/components/ProductList/ProductList';

import ThemeHeader from '../components/common/Header/ThemeHeader';

const themes = {
  birthday: {
    label: '생일',
    title: '생일 선물',
    description: '특별한 날을 위한 선물',
    backgroundColor: '#FFB6C1',
  },
  graduation: {
    label: '졸업',
    title: '졸업 선물',
    description: '새로운 시작을 축하하는 선물',
    backgroundColor: '#8A2B22',
  },
  luxury: {
    label: '스몰 럭셔리',
    title: '스몰 럭셔리',
    description: '작지만 값지게',
    backgroundColor: '#C0C0C0',
  },
  brand: {
    label: '명품',
    title: '명품 선물',
    description: '언제나 세련되게',
    backgroundColor: '#2C3E50',
  },
  wedding: {
    label: '결혼',
    title: '결혼 선물',
    description: '새로운 가정의 탄생',
    backgroundColor: '#D4AF37',
  },
  warm: {
    label: '따뜻한 선물',
    title: '따뜻한 선물',
    description: '마음을 나눠요',
    backgroundColor: '#87CEEB',
  },
  light: {
    label: '가벼운 선물',
    title: '가벼운 선물',
    description: '예산은 가볍게, 감동은 무겁게 ❤️\n당신의 센스롤 뽐내줄 부담 없는 선물',
    backgroundColor: '#4A4A4A',
  },
  emergency: {
    label: '팬심 저격',
    title: '팬심 저격',
    description: '연예인 덕질도 이곳에서',
    backgroundColor: '#DCAE96',
  },
  exchange: {
    label: '교환권',
    title: '교환권 선물',
    description: '마음에 들지 않으면 교환할 수 있는 선물',
    backgroundColor: '#00FF7F',
  },
  health: {
    label: '건강/비타민',
    title: '건강/비타민 선물',
    description: '건강을 챙기는 최고의 선물',
    backgroundColor: '#FF4500',
  },
  fruit: {
    label: '과일/한우',
    title: '과일/한우 선물',
    description: '신선한 과일과 한우를 선물하세요',
    backgroundColor: '#6A5ACD',
  },
  kids: {
    label: '출산/키즈',
    title: '출산/키즈 선물',
    description: '아이와 엄마를 위한 선물',
    backgroundColor: '#FF69B4',
  },
};

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: keyof typeof themes }>();

  if (!themeKey || !themes[themeKey]) {
    return <div>존재하지 않는 테마입니다.</div>;
  }

  const theme = themes[themeKey];
  const descriptionLines = theme.description.split('\n');

  return (
    <div>
      <ThemeHeader
        title={theme.title}
        subtitle={descriptionLines}
        backgroundColor={theme.backgroundColor}
      />
      <ProductList showMoreButton={false} initialVisibleProducts={Infinity} />
    </div>
  );
};

export default ThemePage;
