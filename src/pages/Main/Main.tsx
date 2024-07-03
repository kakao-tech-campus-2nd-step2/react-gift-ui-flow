import React from 'react';
import Container from '@components/Layout/Container';
import ThemeSection from '@pages/Main/ThemeSection/ThemeSection';
import RankingSection from '@pages/Main/RankingSection/RankingSection';

const Main = () => (
  <Container
    width="100%"
    flexDirection="column"
  >
    <ThemeSection />
    <RankingSection />
  </Container>
);

export default Main;
