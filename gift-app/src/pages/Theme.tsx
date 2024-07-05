import Layout from 'Layout/Layout';
import ThemeHeader from '@components/ThemePage/ThemeHeader';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

const themeData: { [key: string]: { label: string; title: string; description: string; backgroundColor: string } } = {
  life_small_gift: {
    label: '가벼운 선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#424242'
  },

};

const Theme = () => {
  const { themeKey } = useParams<{ themeKey?: string }>();
  const theme = themeData[themeKey ?? 'life_small_gift'];

  return (
    <Layout>
      <ThemeContainer>
        <ThemeHeader 
          label={theme.label}
          title={theme.title}
          description={theme.description}
          backgroundColor={theme.backgroundColor}
        />
      </ThemeContainer>
    </Layout>
  );
};

const ThemeContainer = styled.div`
  background-color: #f0f0f0;
  min-height: 100vh;
`;

export default Theme;