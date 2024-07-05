import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';

const themeData = {
  theme1: {
    label: 'Theme 1',
    title: '생일',
    description: '생일테마 입니다.',
    backgroundColor: '#fafafa',
  },
  theme2: {
    label: 'Theme 2',
    title: '졸업선물',
    description: '졸업선물 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme3: {
    label: 'Theme 3',
    title: '스몰럭셔리',
    description: '스몰럭셔리 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme4: {
    label: 'Theme 4',
    title: '명품선물',
    description: '명품선물 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme5: {
    label: 'Theme 5',
    title: '결혼/집들이',
    description: '결혼/집들이 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme6: {
    label: 'Theme 6',
    title: '따뜻한 선물',
    description: '따뜻한 선물 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme7: {
    label: 'Theme 7',
    title: '가벼운 선물',
    description: '가벼운 선물 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme8: {
    label: 'Theme 8',
    title: '팬심저격',
    description: '팬심저격 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme9: {
    label: 'Theme 9',
    title: '교환권',
    description: '교환권 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme10: {
    label: 'Theme 10',
    title: '건강/비타민',
    description: '건강/비타민 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme11: {
    label: 'Theme 11',
    title: '과일/한우',
    description: '과일/한우 테마입니다.',
    backgroundColor: '#fafafa',
  },
  theme12: {
    label: 'Theme 12',
    title: '출산/키즈',
    description: '출산/키즈 테마입니다.',
    backgroundColor: '#fafafa',
  },
};

const Theme: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();
  const theme = themeData[themeKey as keyof typeof themeData];

  return (
    <Container>
      {/* 헤더섹션 */}
      <div style={{ backgroundColor: theme.backgroundColor, padding: '20px', borderRadius: '8px' }}>
        <h1>{theme.title}</h1>
        <p>{theme.description}</p>
      </div>
      <h2>선물들</h2>
      <Grid columns={3} gap={16}>
        <DefaultGoodsItems imageSrc="https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240430174212_b0d1914f94824e378dd688cdc9347c86.jpg" subtitle="Subtitle" title="Title 1" amount={1000} />
        <DefaultGoodsItems imageSrc="https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240430174212_b0d1914f94824e378dd688cdc9347c86.jpg" subtitle="Subtitle" title="Title 2" amount={2000} />
        <DefaultGoodsItems imageSrc="https://img1.kakaocdn.net/thumb/C320x320@2x.fwebp.q82/?fname=https%3A%2F%2Fst.kakaocdn.net%2Fproduct%2Fgift%2Fproduct%2F20240430174212_b0d1914f94824e378dd688cdc9347c86.jpg" subtitle="Subtitle" title="Title 3" amount={3000} />
      </Grid>
    </Container>
  );
};

export default Theme;
