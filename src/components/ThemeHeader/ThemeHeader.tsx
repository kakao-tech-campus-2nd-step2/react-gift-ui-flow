/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';

interface ThemeData {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
  themeKey: string;
}

const headerStyles = (backgroundColor: string) => css`
  background-color: ${backgroundColor};
  color: white;
  padding: 30px;
  margin-bottom: 20px;
  .title {
    font-size: 30px;
    font-weight: bold;
  }
  .description {
    font-size: 24px;
  }
  p {
    margin: 20px 0;
  }
`;

const themeData: { [key: string]: ThemeData } = {
  birthday: {
    label: '생일',
    title: '생일 선물 추천',
    description: '특별한 생일을 위한 완벽한 선물들',
    backgroundColor: '#f5a623',
    themeKey: 'birthday',
  },
  graduation: {
    label: '졸업선물',
    title: '졸업 선물 추천',
    description: '졸업을 축하하는 최고의 선물',
    backgroundColor: '#4a90e2',
    themeKey: 'graduation',
  },
  luxury: {
    label: '명품선물',
    title: '명품 선물 추천',
    description: '럭셔리하고 고급스러운 선물들',
    backgroundColor: '#bd10e0',
    themeKey: 'luxury',
  },
  wedding: {
    label: '결혼/집들이',
    title: '결혼 및 집들이 선물 추천',
    description: '새로운 시작을 축하하는 최고의 선물들',
    backgroundColor: '#ff6347',
    themeKey: 'wedding',
  },
  warm: {
    label: '따뜻한선물',
    title: '따뜻한 마음을 전하는 선물 추천',
    description: '따뜻함을 전달하는 선물들',
    backgroundColor: '#ffb6c1',
    themeKey: 'warm',
  },
  light: {
    label: '가벼운선물',
    title: '가벼운 선물 추천',
    description: '부담 없이 주고받을 수 있는 선물들',
    backgroundColor: '#87cefa',
    themeKey: 'light',
  },
  fan: {
    label: '팬심저격',
    title: '팬심을 저격하는 선물 추천',
    description: '팬들을 위한 최고의 선물들',
    backgroundColor: '#dda0dd',
    themeKey: 'fan',
  },
  exchange: {
    label: '교환권',
    title: '교환권 선물 추천',
    description: '다양하게 사용 가능한 교환권 선물들',
    backgroundColor: '#8fbc8f',
    themeKey: 'exchange',
  },
  health: {
    label: '건강/비타민',
    title: '건강을 위한 선물 추천',
    description: '건강을 챙기는 선물들',
    backgroundColor: '#3cb371',
    themeKey: 'health',
  },
  food: {
    label: '과일/한우',
    title: '과일 및 한우 선물 추천',
    description: '맛있고 건강한 선물들',
    backgroundColor: '#ffa07a',
    themeKey: 'food',
  },
  kids: {
    label: '출산/키즈',
    title: '출산 및 키즈 선물 추천',
    description: '아이들을 위한 선물들',
    backgroundColor: '#ff69b4',
    themeKey: 'kids',
  },
};

interface HeaderProps {
  themeKey: keyof typeof themeData;
}

const ThemeHeader: React.FC<HeaderProps> = ({ themeKey }) => {
  const theme = themeData[themeKey];

  if (!theme) {
    return <div>Invalid theme key: {themeKey}</div>;
  }

  return (
    <div css={headerStyles(theme.backgroundColor)}>
      <p>{theme.label}</p>
      <p className='title'>{theme.title}</p>
      <p className='description'>{theme.description}</p>
    </div>
  );
};

export default ThemeHeader;
