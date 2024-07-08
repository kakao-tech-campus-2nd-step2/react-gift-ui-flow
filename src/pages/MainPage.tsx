import styled from '@emotion/styled';

import { Footer } from '@/components/common/Footer/Footer';
import { Header } from '@/components/common/Header/Header';
import { RankingSection } from '@/components/section/Ranking/RankingSection';
import { ThemeSection } from '@/components/section/Theme/ThemeSection';

const MainPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <ThemeSection />
        <RankingSection />
        <Footer />
      </Wrapper>
    </>
  );
};

export default MainPage;

const Wrapper = styled.div({
  width: '100%',
  position: 'absolute',
  top: '0px',
  left: '0px',
  marginTop: '54px',
});
