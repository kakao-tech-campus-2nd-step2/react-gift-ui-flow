import Page from '@components/templates/Page';
import Container from '@components/atoms/container/Container';
import MainBanner from '@components/organisms/main/MainBanner';
import ThemeSection from '@components/organisms/main/ThemeSection';
import AIButtonSection from '@components/organisms/main/AIButtonSection';
import RankingSection from '@components/organisms/main/ranking/RankingSection';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

function MainPage() {
  const location = useLocation();
  const { loginState } = location.state;
  const [isLoggedIn] = useState(loginState);

  return (
    <Page isLoggedIn={isLoggedIn}>
      <Container flexDirection="column" elementSize="full-width">
        <MainBanner />
        <ThemeSection maxColumns={6} />
        <AIButtonSection />
        <Container elementSize={{ width: '100%', height: '120px' }} />
        <RankingSection />
      </Container>
    </Page>
  );
}

export default MainPage;
