import React from 'react';
import { useParams } from 'react-router-dom';

// 테마 객체 정의
const themes = {
  birthday: '생일',
  graduation: '졸업선물',
  'small-luxury': '스몰럭셔리',
  luxury: '명품선물',
  'wedding-housewarming': '결혼/집들이',
  'warm-gifts': '따뜻한선물',
  'light-gifts': '가벼운선물',
  'fan-gifts': '팬심저격',
  'gift-certificates': '교환권',
  'health-vitamins': '건강/비타민',
  'fruits-beef': '과일/한우',
  'birth-kids': '출산/키즈',
};

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  // themeKey가 존재하지 않으면 기본값으로 빈 문자열을 사용
  const themeName = themes[themeKey as keyof typeof themes] || '알 수 없는 테마';

  return (
    <div className="theme-page">
      <h1>{themeName} 페이지</h1>
    </div>
  );
};

export default ThemePage;
