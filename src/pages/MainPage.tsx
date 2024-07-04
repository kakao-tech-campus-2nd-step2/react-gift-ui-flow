import Page from '@components/templates/Page';
import Container from '@components/atoms/container/Container';
import MainBanner from '@components/organisms/main/MainBanner';
import ThemeSection from '@components/organisms/main/theme/ThemeSection';
import AIButtonSection from '@components/organisms/main/AIButtonSection';
import RankingSection from '@components/organisms/main/ranking/RankingSection';
import ResponsiveContainer
  from '@components/atoms/container/ResponsiveContainer';

function MainPage() {
  return (
    <Page>
      <Container flexDirection="column" elementSize="full-width">
        <MainBanner />
        <ThemeSection />
        <AIButtonSection />
        <ResponsiveContainer
          sizeDefault={{ width: '100%', height: '120px' }}
          sizeSm={{ width: '100%', height: '0px' }}
        />
        <RankingSection />
      </Container>
    </Page>
  );
}

export default MainPage;
