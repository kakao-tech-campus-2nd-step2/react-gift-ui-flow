import styled from '@emotion/styled';

import Footer from '@/components/common/Layouts/Footer/Footer';
import Header from '@/components/common/Layouts/Header/Header';
import RankingCategory from '@/components/ranking/RankingCategory';
import ThemeCategory from '@/components/theme/ThemeCategory';

const MainPage: React.FC = () => {
  return (
    <MainPageWrapper>
      <Header />
        <MainContainer>
          <ThemeCategory />
          <EmptyField/>
          <RankingCategory />
        </MainContainer>
      <Footer />
    </MainPageWrapper>  
  )
}

export default MainPage

const MainPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const MainContainer = styled.div`
  flex: 1;
  width: 100%;
  margin-top: 54px;
  margin-bottom: 120px;
`;

const EmptyField = styled.div`
  width: 100%;
  background-color: inherit;

  @media screen and (min-width: 1024px) {
    height: 120px;
  } 
  @media screen and (min-width: 768px) {
    height: 80px;
  } 
  @media screen and (min-width: 0) {
    height: 40px;
  } 
`;
