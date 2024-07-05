import React from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import Layout from 'Layout/Layout';
import ThemeHeader from '@components/ThemePage/ThemeHeader';
import ItemList from '@components/ThemePage/ItemList'; // ItemList 컴포넌트 가져오기

const themeData: { [key: string]: { label: string; title: string; description: string; backgroundColor: string } } = {
  life_small_gift: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#424242'
  },
  light: {
    label: '기본 테마',
    title: '기본 테마 제목',
    description: '기본 테마 설명',
    backgroundColor: '#000000'
  }
};

const Theme = () => {
  const { themeKey } = useParams<{ themeKey?: string }>();
  const theme = themeData[themeKey ?? 'light'];

  return (
    <Layout>
      <ThemeContainer>
        <ThemeHeader 
          label={theme.label}
          title={theme.title}
          description={theme.description}
          backgroundColor={theme.backgroundColor}
        />
        <ItemList /> {/* ItemList 컴포넌트를 추가 */}
      </ThemeContainer>
    </Layout>
  );
};

const ThemeContainer = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export default Theme;